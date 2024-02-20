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
        <div className="cart-item mt-2 h-[250px] border-[1px] border-[#80808045] py-3 px-3 rounded flex justify-between sm:h-[250px] lg:h-[200px] xl:h-[150px]">
                    <div>
                        <div className="text-[#2d2d2de8] text-5xl font-medium sm:text-4xl lg:text-3xl xl:text-xl">{name}</div>
                        <div className="text-4xl mt-1 font-medium text-red-400 sm:text-3xl lg:text-2xl xl:text-lg xl:mt-0">{price}₹</div>
                        <div className="text-3xl mt-3 text-[#757878] sm:text-2xl lg:text-xl xl:text-base xl:mt-1"><span>Quantity : </span>{quantity}</div>
                        <button onClick={addItemHandler} className="text-3xl mt-2 mr-2 bg-[#F05941] py-3 px-8 text-white border-[1px] border-[#F05941] rounded-3xl sm:text-2xl sm:py-2 sm:px-6 lg:text-xl lg:py-1 xl:text-base xl:py-0 xl:px-3">+</button>
                        <button onClick={removeItemHandler} className="text-3xl mt-2 bg-[#F05941] py-3 px-8 text-white border-[1px] border-[#F05941] rounded-3xl sm:text-2xl sm:py-2 sm:px-6 lg:text-xl lg:py-1 xl:text-base xl:py-0 xl:px-3">-</button>
                    </div>

                    <div className="h-[100%]">
                        <img src={image} alt="Item Image" className="h-[inherit] w-[200px] object-cover rounded-md sm:w-[180px] xl:w-[130px]"></img>
                    </div>
                </div>
    )
}

export default CartItem;