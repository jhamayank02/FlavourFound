import { useContext } from "react";
import CartItem from "../../ui/CartItem";
import Modal from "../../ui/Modal";
import cartContext from "../../ctx/cartContext";
import authContext from "../../ctx/authContext";

const Cart = (props)=>{
    const authCtx = useContext(authContext);
    const cartCtx = useContext(cartContext);

    const {showLogin} = props;

    return <Modal hideModal={props.hideCartHandler}>

        <div className="cart max-h-[1200px] px-2">
            <h1 className="text-6xl mb-10 text-[#2d2d2de8]">Your Cart</h1>

            <div className='max-h-[1100px] overflow-x-hidden overflow-y-scroll pr-[2px]'>
            {cartCtx.quantity === 0 && <h1 className="text-5xl my-8 text-center text-[#2d2d2de8]">Your cart is empty</h1>}

            <div className="cart-items">
                {cartCtx.items.map(item => <CartItem key={item.id} data={item} />)}
            </div>


            {
                cartCtx.total_amount > 0 && <div className="flex justify-end mt-6 text-5xl"><span className="font-semibold">Order Total :</span><span>&nbsp;{cartCtx.total_amount}₹</span></div>
            }
            

            <div className="actions flex justify-end mt-6 mb-6">
                <button onClick={props.hideCartHandler} className="text-4xl py-3 mr-3 px-10 border-[1px] border-[#e9e9e980] bg-[#e9e9e980] text-[#555555] rounded-3xl hover:bg-[#F05941] hover:text-white hover:border-[#F05941]">Close</button>
                {!authCtx.authenticated && cartCtx.total_amount > 0 && <button onClick={props.showLogin} className="text-4xl bg-[#F05941] py-3 px-10 text-white border-[1px] border-[#F05941] rounded-3xl hover:border-[#e9e9e980] hover:bg-[#e9e9e980] hover:text-[#555555]">Login to place order</button>}
                {authCtx.authenticated && cartCtx.total_amount > 0 && <button onClick={props.showOrderFormHandler} className="text-4xl bg-[#F05941] py-3 px-10 text-white border-[1px] border-[#F05941] rounded-3xl hover:border-[#e9e9e980] hover:bg-[#e9e9e980] hover:text-[#555555]">Place order</button>}
            </div>
            </div>
        </div>

    </Modal>
}

export default Cart;