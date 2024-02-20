import { useContext, useRef } from "react";
import Modal from "../../ui/Modal";
import './css/auth.css';
import authContext from "../../ctx/authContext";
import cartContext from "../../ctx/cartContext";

const Login = (props)=>{

    const authCtx = useContext(authContext);
    const cartCtx = useContext(cartContext);
    
    const emailRef = useRef();
    const passwordRef = useRef();
    
    const {hideLoginHandler, showSignup} = props;

    const loginHandler = (e)=>{
        e.preventDefault();
 
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        
        authCtx.loginHandler(data);
        hideLoginHandler();
        cartCtx.resetCart();
    }

    return (
        <Modal hideModal={hideLoginHandler}>
            <div className="login-container w-[90%] mx-auto h-[580px] flex justify-center flex-col sm:h-[520px] md:w-[95%] md:h-[440px] lg:h-[360px] xl:h-[240px]">


            <form onSubmit={loginHandler}>

                <h1 className="text-6xl mb-12 text-[#2d2d2de8] sm:text-5xl md:mb-8 lg:text-4xl lg:mb-6 xl:text-3xl xl:mb-4">Login into Your account</h1>

                <input ref={emailRef} type="email" required className="text-4xl focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-4 py-4 px-3 rounded-sm w-[100%] sm:text-3xl sm:py-3 sm:mb-3 md:text-2xl md:py-2 md:mb-2 lg:text-xl lg:py-1 lg:mb-1 xl:text-base" placeholder="Enter your email id"></input>
                <input ref={passwordRef} required className="text-4xl focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-2 py-4 px-3 rounded-sm w-[100%] sm:text-3xl sm:py-3 sm:mb-3 md:text-2xl md:py-2 md:mb-2 lg:text-xl lg:py-1 lg:mb-1 xl:text-base" type="password" placeholder="Enter your password"></input>

                <button type="submit" className="text-4xl mt-8 bg-[#F05941] mr-3 py-4 px-10 text-white border-[1px] border-[#F05941] rounded-sm w-[100%] sm:text-3xl sm:py-3 md:text-2xl md:py-2 lg:text-xl lg:py-1 xl:text-lg xl:py-0 xl:mt-4">Login</button>

            </form>

            <div className="separator my-3 text-2xl text-[#aca9a9ed] text-center lg:text-lg xl:text-base">OR</div>

            <button className="py-4 text-4xl px-10 border-[1px] border-[#e9e9e980] bg-[#e9e9e980] text-[#555555] rounded-sm w-[100%] flex justify-center items-center sm:text-3xl sm:py-3 md:text-2xl md:py-2 lg:text-xl lg:py-1 xl:text-lg xl:py-0">Login with Google<i className='bx bxl-google text-[#555555] pl-1' ></i></button>

            <div onClick={showSignup} className="cursor-pointer mt-6 text-[#269bff] hover:underline text-3xl md:text-2xl lg:text-xl xl:text-base xl:mt-3">Don't have an account?</div>

            </div>
        </Modal>
        
    );
}

export default Login;