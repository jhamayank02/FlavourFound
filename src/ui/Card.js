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

    return <div className="card w-[330px] max-[700px]:w-[160px]">
        
        <div className="card-content border=[#f4f4f4] border-[1px] overflow-hidden rounded-md">

            <img onClick={openFoodPageHandler} className="w-[100%] h-[300px] object-cover max-[700px]:h-[150px]" src={images[0].img_url} alt="card-image"></img>

            <div className="details bg-white p-2">

                <div className="name text-3xl font-[500] max-[700px]:text-xl">{name}</div>
                <div className="actions mt-2 flex justify-between items-center max-[700px]:flex-wrap">
                    <div className="price text-xl font-[500] max-[700px]:text-lg">{price}₹</div>
                    <div>
                    {quantity > 0 && <button onClick={removeFromCartHandler} className="bg-[#F05941] py-1 px-4 text-white border-[1px] border-[#F05941] border-r-white rounded-l-2xl hover:bg-white hover:text-[#F05941] hover:border-[#F05941] max-[700px]:text-sm max-[700px]:px-2">-</button>}
                    {quantity === 0 && <button onClick={addToCartHandler} className="mr-2 bg-[#F05941] py-1 px-10 text-white border-[1px] border-[#F05941] rounded-2xl max-[700px]:text-sm max-[700px]:px-2">Add to Cart</button>}
                    {quantity > 0 && <button className="py-1 px-5 border-[1px] border-[#F05941] bg-[#F05941] text-white cursor-not-allowed max-[700px]:text-sm max-[700px]:px-2">{quantity}</button>}
                    {quantity >= 1 && <button onClick={addToCartHandler} className="border-l-white bg-[#F05941] py-1 px-4 text-white border-[1px] border-[#F05941] rounded-r-2xl hover:bg-white hover:text-[#F05941] hover:border-[#F05941] max-[700px]:text-sm max-[700px]:px-2">+</button>}
                    </div>
                </div>

            </div>

        </div>

    </div>
}

export default Card;