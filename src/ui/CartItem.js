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
        <div className="cart-item mt-2 h-[130px] border-[1px] border-[#80808045] p-2 rounded flex justify-between">
                    <div>
                        <div className="text-[#2d2d2de8] text-xl font-medium">{name}</div>
                        <div className="text-[14px] mt-[-5px] font-medium text-red-400">{price}</div>
                        <div><span className="text-[15px] text-[#757878]">Quantity : </span>{quantity}</div>
                        <button onClick={addItemHandler} className="mt-2 mr-2 bg-[#F05941] py-1 px-4 text-white border-[1px] border-[#F05941] rounded-2xl">+</button>
                        <button onClick={removeItemHandler} className="mt-2 bg-[#F05941] py-1 px-4 text-white border-[1px] border-[#F05941] rounded-2xl">-</button>
                    </div>

                    <div className="h-[100%]">
                        <img src={image} alt="Item Image" className="h-[inherit] w-[100px] object-cover rounded-md"></img>
                    </div>
                </div>
    )
}

export default CartItem;