import { useContext, useEffect, useState } from 'react';
import cartContext from '../ctx/cartContext';
import { useNavigate } from 'react-router-dom';

const Card = (props)=>{

    const cartCtx = useContext(cartContext);
    const navigate = useNavigate();

    const {_id, name, price, images} = props.data;

    const ind = cartCtx.items.findIndex(item => item.id === _id);
    const [quantity, setQuantity] = useState(ind === -1 ? 0 : cartCtx.items[ind].quantity);

    const addToCartHandler = ()=>{
        if(ind === -1){
            setQuantity(1);
        }
        else{
            setQuantity(cartCtx.items[ind].quantity+1);
        }
        cartCtx.addItem({
            id: _id,
            name: name,
            price: price,
            quantity: quantity,
            image: images[0].img_url
        })
    }

    const removeFromCartHandler = ()=>{
        setQuantity(cartCtx.items[ind].quantity-1);
        cartCtx.removeItem(_id)
    }

    const openFoodPageHandler = ()=>{
        navigate('/food-page', {state: {id: _id}});
    }

    return <div className="card w-[470px]">
        
        <div className="card-content border=[#f4f4f4] border-[1px] overflow-hidden rounded-md">

            <img onClick={openFoodPageHandler} className="w-[100%] h-[450px] object-cover" src={images[0].img_url} alt="card-image"></img>

            <div className="details bg-white p-2">

                <div className="name text-5xl font-[500]">{name}</div>
                <div className="actions mt-4 flex justify-between items-center">
                    <div className="price text-4xl font-[500]">{price}₹</div>
                    <div>
                    {quantity > 0 && <button onClick={removeFromCartHandler} className="bg-[#F05941] py-3 px-7 text-white border-[1px] border-[#F05941] border-r-white rounded-l-2xl hover:bg-white hover:text-[#F05941] hover:border-[#F05941] text-3xl">-</button>}
                    {quantity === 0 && <button onClick={addToCartHandler} className="bg-[#F05941] py-3 px-10 text-white border-[1px] border-[#F05941] rounded-3xl hover:border-[#e9e9e980] hover:bg-[#e9e9e980] hover:text-[#555555] text-3xl">Add to Cart</button>}
                    {quantity > 0 && <button className="py-3 px-8 border-[1px] border-[#F05941] bg-[#F05941] text-white cursor-not-allowed text-3xl">{quantity}</button>}
                    {quantity >= 1 && <button onClick={addToCartHandler} className="border-l-white bg-[#F05941] py-3 px-7 text-white border-[1px] border-[#F05941] rounded-r-2xl hover:bg-white hover:text-[#F05941] hover:border-[#F05941] text-3xl">+</button>}
                    </div>
                </div>

            </div>

        </div>

    </div>
}

export default Card;