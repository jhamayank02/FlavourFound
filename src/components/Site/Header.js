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
            <div onClick={showNavigation} id="hamburgerBtn" className="hamburgerBtn cursor-pointer bg-[#f05941] text-white mr-2 rounded hover:text-[#f05941] hover:bg-[#e9e9e980] text-4xl px-6 py-3 rounded-md sm:text-3xl md:text-2xl md:py-2 md:px-4 lg:text-xl lg:py-1 lg:px-3 xl:text-lg xl:px-[10px] xl:py-[2px]">☰</div>
            <Link to="/" className="logo cursor-pointer flex-1 text-5xl text-[#f05941] font-bold tracking-[0.3rem] sm:text-4xl lg:text-3xl xl:text-2xl">FlavourFound</Link>
        </div>

        <div className="flex">
            {!authCtx.authenticated && <button onClick={showLogin} className="py-1 px-5 mr-3  border-[1px] border-[#e9e9e980] bg-[#e9e9e980] text-[#555555] rounded-2xl hover:bg-[#F05941] hover:text-white hover:border-[#F05941] hidden lg:block  lg:text-xl lg:py-1 lg:px-4 xl:text-base xl:px-3 xl:py-1 xl:rounded-2xl">Login</button>}
            {authCtx.authenticated && <button onClick={logoutHandler} className="py-1 px-5 mr-3  border-[1px] border-[#e9e9e980] bg-[#e9e9e980] text-[#555555] rounded-2xl hover:bg-[#F05941] hover:text-white hover:border-[#F05941] hidden lg:block  lg:text-xl lg:py-1 lg:px-4 xl:text-base xl:px-3 xl:py-1 xl:rounded-2xl">Logout</button>}
            <button onClick={showCart} className="bg-[#F05941] py-2 px-5 text-white border-[1px] border-[#F05941] rounded-3xl text-4xl flex items-center hover:bg-white hover:text-[#F05941] hover:border-[#F05941] sm:px-5 sm:py-2 sm:text-3xl md:text-2xl md:py-2 lg:text-xl lg:py-1 lg:px-4 xl:text-base xl:px-3 xl:py-1 xl:rounded-2xl"><span>Cart</span><i className='bx bx-cart text-xl sm:text-3xl md:text-2xl lg:text-xl xl:text-base'></i><span className="pl-2">{cartCtx.quantity}</span></button>
        </div>
    </header>
}

export default Header;