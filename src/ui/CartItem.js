import { useContext } from 'react';
import cartContext from '../ctx/cartContext';

const CartItem = (props)=>{

    const ctx = useContext(cartContext);

    const {id, name, price, quantity, image} = props.data;

    const addItemHandler = ()=>{
        ctx.addItem({
            id: id,
            name: name,
            price: price,
            image: image
        })
    }

    const removeItemHandler = ()=>{
        ctx.removeItem(id);
    }

    return (
        <div className="cart-item mt-2 h-[250px] border-[1px] border-[#80808045] py-3 px-3 rounded flex justify-between">
                    <div>
                        <div className="text-[#2d2d2de8] text-5xl font-medium">{name}</div>
                        <div className="text-4xl mt-1 font-medium text-red-400">{price}₹</div>
                        <div className="text-3xl mt-3 text-[#757878]"><span>Quantity : </span>{quantity}</div>
                        <button onClick={addItemHandler} className="text-3xl mt-2 mr-2 bg-[#F05941] py-3 px-8 text-white border-[1px] border-[#F05941] rounded-3xl">+</button>
                        <button onClick={removeItemHandler} className="text-3xl mt-2 bg-[#F05941] py-3 px-8 text-white border-[1px] border-[#F05941] rounded-3xl">-</button>
                    </div>

                    <div className="h-[100%]">
                        <img src={image} alt="Item Image" className="h-[inherit] w-[200px] object-cover rounded-md"></img>
                    </div>
                </div>
    )
}

export default CartItem;