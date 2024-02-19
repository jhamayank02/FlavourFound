import { useContext, useEffect } from "react";
import {Link} from 'react-router-dom';
import cartContext from "../../ctx/cartContext";
import authContext from "../../ctx/authContext";

const Header = ({showCart, showLogin, showNavigation, showMyOrders}) => {

    const cartCtx = useContext(cartContext);
    const authCtx = useContext(authContext);
    
    const logoutHandler = ()=>{
        cartCtx.resetCart();
        authCtx.logoutHandler();
    }
 
    useEffect(()=>{
        cartCtx.fetchCartItems();
    }, [authCtx.authenticated]);

    return <header className="flex px-5 py-3 justify-between items-center sticky top-0 h-[fit-content] z-10 bg-white">
        <div className="flex items-center">
            <div onClick={showNavigation} id="hamburgerBtn" className="hamburgerBtn cursor-pointer bg-[#f05941] text-white mr-2 rounded hover:text-[#f05941] hover:bg-[#e9e9e980] text-4xl px-6 py-3 rounded-md">☰</div>
            <Link to="/" className="logo cursor-pointer flex-1 text-4xl text-[#f05941] font-bold tracking-[0.3rem] sm:text-5xl">FlavourFound</Link>
        </div>

        <div className="flex">
            {!authCtx.authenticated && <button onClick={showLogin} className="py-1 px-5 mr-3  border-[1px] border-[#e9e9e980] bg-[#e9e9e980] text-[#555555] rounded-2xl hover:bg-[#F05941] hover:text-white hover:border-[#F05941] sm:hidden">Login</button>}
            {authCtx.authenticated && <button onClick={logoutHandler} className="py-1 px-5 mr-3  border-[1px] border-[#e9e9e980] bg-[#e9e9e980] text-[#555555] rounded-2xl hover:bg-[#F05941] hover:text-white hover:border-[#F05941] sm:hidden">Logout</button>}
            <button onClick={showCart} className="bg-[#F05941] py-1 px-5 text-white border-[1px] border-[#F05941] rounded-2xl flex items-center hover:bg-white hover:text-[#F05941] hover:border-[#F05941] sm:px-5 sm:py-3 sm:rounded-4xl sm:text-3xl"><span>Cart</span><i className='bx bx-cart text-xl sm:text-3xl'></i><span className="pl-2">{cartCtx.quantity}</span></button>
        </div>
    </header>
}

export default Header;