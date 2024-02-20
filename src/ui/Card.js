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

    return <div className="card w-[470px] md:w-[300px]">
        
        <div className="card-content border=[#f4f4f4] border-[1px] overflow-hidden rounded-md">

            <img onClick={openFoodPageHandler} className="w-[100%] h-[450px] object-cover md:h-[300px]" src={images[0].img_url} alt="card-image"></img>

            <div className="details bg-white p-2">

                <div className="name text-5xl font-[500] sm:text-4xl md:text-3xl xl:text-2xl">{name}</div>
                <div className="actions mt-4 flex justify-between items-center sm:mt-2 xl:mt-1">
                    <div className="price text-4xl font-[500] sm:text-3xl md:text-2xl lg:text-xl">{price}₹</div>
                    <div>
                    {quantity > 0 && <button onClick={removeFromCartHandler} className="border-r-white bg-[#F05941] py-3 px-7 text-white border-[1px] border-[#F05941] rounded-l-2xl hover:bg-white hover:text-[#F05941] hover:border-[#F05941] text-3xl sm:text-2xl sm:py-2 md:text-xl md:px-5 xl:text-base xl:py-1 xl:px-4">-</button>}
                    {quantity === 0 && <button onClick={addToCartHandler} className="bg-[#F05941] py-3 px-10 text-white border-[1px] border-[#F05941] rounded-3xl hover:border-[#e9e9e980] hover:bg-[#e9e9e980] hover:text-[#555555] text-3xl sm:text-2xl sm:py-2 md:text-xl md:px-5 xl:text-base xl:py-1 xl:px-4">Add to Cart</button>}
                    {quantity > 0 && <button className="border-x-white bg-[#F05941] py-3 px-7 text-white border-[1px] border-[#F05941] hover:bg-white hover:text-[#F05941] hover:border-[#F05941] text-3xl sm:text-2xl sm:py-2 md:text-xl md:px-5 xl:text-base xl:py-1 xl:px-4">{quantity}</button>}
                    {quantity >= 1 && <button onClick={addToCartHandler} className="border-l-white bg-[#F05941] py-3 px-7 text-white border-[1px] border-[#F05941] rounded-r-2xl hover:bg-white hover:text-[#F05941] hover:border-[#F05941] text-3xl sm:text-2xl sm:py-2 md:text-xl md:px-5 xl:text-base xl:py-1 xl:px-4">+</button>}
                    </div>
                </div>

            </div>

        </div>

    </div>
}

export default Card;