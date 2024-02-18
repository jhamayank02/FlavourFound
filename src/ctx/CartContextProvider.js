import { useContext, useReducer } from "react"
import cartContext from "./cartContext"
import authContext from './authContext';
import notificationContext from './notificationContext';

const default_cart_state = {
    items: [],
    total_amount: 0,
    quantity: 0,
    addItem: ()=>{},
    removeItem: ()=>{},
    resetCart: ()=>{},
    fetchCartItems: ()=>{}
}

const cartReducer = (state, action)=>{
    if(action.type === 'ADD'){
        const item_id = action.item.id;
        let ind = state.items.findIndex(item => item.id === item_id);

        let updatedItems = state.items;
        let updatedQuantity = state.quantity;
        let updatedTotalAmount = state.total_amount;
        
        // If item is already present in the cart
        if(ind !== -1){
            updatedItems[ind].quantity++;
        }
        // If item is going to be added for the first time
        else{
            const item = {
                id: action.item.id,
                name: action.item.name,
                price: Number(action.item.price),
                quantity: 1,
                image: action.item.image
            }

            updatedItems.push(item);
        }

        updatedQuantity++;
        updatedTotalAmount += Number(action.item.price);

        return {
            ...state,
            items: updatedItems,
            quantity: updatedQuantity,
            total_amount: updatedTotalAmount
        }
    }
    else if(action.type === 'REMOVE'){
        const item_id = action.id;

        const ind = state.items.findIndex(item => item.id === item_id);

        let updatedItems = state.items;
        let updatedQuantity = state.quantity;
        let updatedTotalAmount = state.total_amount;

        let item_price;

        // If cart contains multiple instances of the item, then remove 1 instance
        if(ind !== -1 && updatedItems[ind].quantity > 1){
            item_price = updatedItems[ind].price;
            updatedItems[ind].quantity--;
        }
        // Else remove the complete item
        else if(ind !== -1){
            item_price = updatedItems[ind].price;
            updatedItems.splice(ind, 1);
        }

        updatedQuantity--;
        updatedTotalAmount -= item_price;

        return {
            ...state,
            items: updatedItems,
            quantity: updatedQuantity,
            total_amount: updatedTotalAmount
        }
    }
    else if(action.type === 'RESET'){
        return {
            ...state,
            items: [],
            quantity: 0,
            total_amount: 0
        }
    }
    else if(action.type === "FETCH_CART_ITEMS"){
        let updatedItems = state.items;
        let updatedQuantity = action.cart_data.quantity;
        let updatedTotalAmount = action.cart_data.cart_total;

        action.cart_data.cart_items.forEach(item => {
            updatedItems.push({
                id: item.food_id,
                name: item.food_item,
                price: item.item_price,
                quantity: item.item_quantity,
                image: item.food_image
            })
        });

        return {
            ...state,
            quantity: updatedQuantity,
            total_amount: updatedTotalAmount,
            items: updatedItems
        }
    }
    else{
        return {...state}
    }
}

const CartContextProvider = (props)=>{

    const [cart_state, dispatchCartAction] = useReducer(cartReducer, default_cart_state);
    const authCtx = useContext(authContext);
    const notificationCtx = useContext(notificationContext);

    const addItem = (item)=>{
        if(authCtx.authenticated){
            fetch("https://flavourfound.onrender.com/cart/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                customer_id: authCtx.id,
                food_id: item.id
            })
            }).then(response=>{
                return response.json();
            }).then(resData=>{
                if(resData.status === 200){
                    return dispatchCartAction({type: "ADD", item:item});
                }
                else{
                    throw Error(resData.msg);
                }
            }).catch(err=>{
                notificationCtx.showNotification(true, err.message);
            })
        }
        else{
            return dispatchCartAction({type: "ADD", item:item});
        }
    }

    const removeItem = (id)=>{
        if(authCtx.authenticated){
            fetch("https://flavourfound.onrender.com/cart/delete", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    customer_id: authCtx.id,
                    food_id: id
                })
            }).then(response=>{
                return response.json();
            }).then(resData=>{
                if(resData.status === 200){
                    return dispatchCartAction({type: "REMOVE", id:id});
                }
                else{
                    throw Error(resData.msg);
                }
            }).catch(err=>{
                notificationCtx.showNotification(true, err.message);
            })
        }
        else{
            return dispatchCartAction({type: "REMOVE", id:id});
        }
    }

    const fetchCartItems = ()=>{
        if(authCtx.authenticated === false){
            return resetCart();
        }

        fetch("https://flavourfound.onrender.com/cart/cart-details", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                customer_id: authCtx.id
            })
        }).then(response=>{
            return response.json();
        }).then(resData=>{
            if(resData.status === 200){
                return dispatchCartAction({type: "FETCH_CART_ITEMS", cart_data: resData.cartDetails});
            }
            else{
                throw Error(resData.msg);
            }
        }).catch(err=>{
            notificationCtx.showNotification(true, err.message);
        })
    }

    const resetCart = ()=>{
        return dispatchCartAction({type: "RESET"});
    }

    return <cartContext.Provider value={{
        ...cart_state,
        addItem: addItem,
        removeItem: removeItem,
        resetCart: resetCart,
        fetchCartItems: fetchCartItems
        }}>
        {props.children}
    </cartContext.Provider>
}

export default CartContextProvider;