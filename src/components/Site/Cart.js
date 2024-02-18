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

        <div className="cart">
            <h1 className="text-3xl mb-2 text-[#2d2d2de8]">Your Cart</h1>

            <div className='max-h-[355px] overflow-x-hidden overflow-y-scroll pr-[2px]'>
            {cartCtx.quantity === 0 && <h1 className="text-2xl my-8 text-center text-[#2d2d2de8]">Your cart is empty</h1>}

            <div className="cart-items">
                {cartCtx.items.map(item => <CartItem key={item.id} data={item} />)}
            </div>


            {
                cartCtx.total_amount > 0 && <div className="flex justify-end my-2 text-[18px]"><span className="font-semibold">Order Total :</span><span>&nbsp;{cartCtx.total_amount}₹</span></div>
            }
            

            <div className="actions flex justify-end my-3">
                <button onClick={props.hideCartHandler} className="py-1 mr-3 px-10 border-[1px] border-[#e9e9e980] bg-[#e9e9e980] text-[#555555] rounded-2xl max-[600px]:text-sm">Close</button>
                {!authCtx.authenticated && cartCtx.total_amount > 0 && <button onClick={props.showLogin} className="bg-[#F05941] py-1 px-10 text-white border-[1px] border-[#F05941] rounded-2xl max-[600px]:text-sm">Login to place order</button>}
                {authCtx.authenticated && cartCtx.total_amount > 0 && <button onClick={props.showOrderFormHandler} className="bg-[#F05941] py-1 px-10 text-white border-[1px] border-[#F05941] rounded-2xl max-[600px]:text-sm">Place order</button>}
            </div>
            </div>
        </div>

    </Modal>
}

export default Cart;