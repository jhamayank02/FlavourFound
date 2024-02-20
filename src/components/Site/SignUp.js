import { useContext, useRef } from "react";
import Modal from "../../ui/Modal";
import './css/auth.css';
import authContext from "../../ctx/authContext";

const SignUp = (props)=>{

    const authCtx = useContext(authContext);

    const emailRef = useRef();
    const passwordRef = useRef();
    const contactNoRef = useRef();
    const nameRef = useRef();

    const {hideSignupHandler} = props;

    const signupHandler = (e)=>{
        e.preventDefault();
        
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            name: nameRef.current.value,
            contact_no: contactNoRef.current.value
        }

        authCtx.signupHandler(data);

        hideSignupHandler();
    }

    return (
        <Modal hideModal={hideSignupHandler}>
            <div className="signup-container w-[90%] mx-auto h-[690px] flex justify-center flex-col sm:h-[600px] md:w-[95%] md:h-[450px] lg:h-[400px] xl:h-[280px]">

            <form onSubmit={signupHandler}>

                <h1 className="text-6xl mb-12 text-[#2d2d2de8] sm:text-5xl md:mb-8 lg:mb-6 lg:text-4xl xl:text-3xl xl:mb-4">Create a new account</h1>

                <input ref={nameRef} type="text" required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-4 py-4 px-3 text-4xl rounded-sm w-[100%] sm:text-3xl sm:py-3 sm:mb-3 md:text-2xl md:py-2 md:mb-2 lg:text-xl lg:mb-1 lg:py-1 xl:text-base" placeholder="Enter your name"></input>

                <input ref={contactNoRef} type="tel" required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-4 py-4 px-3 text-4xl rounded-sm w-[100%] sm:text-3xl sm:py-3 sm:mb-3 md:text-2xl md:py-2 md:mb-2 lg:text-xl lg:mb-1 lg:py-1 xl:text-base" placeholder="Enter your contact no."></input>

                <input ref={emailRef} type="email" required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-4 py-4 px-3 text-4xl rounded-sm w-[100%] sm:text-3xl sm:py-3 sm:mb-3 md:text-2xl md:py-2 md:mb-2 lg:text-xl lg:mb-1 lg:py-1 xl:text-base" placeholder="Enter your email id"></input>

                <input ref={passwordRef} required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-4 py-4 px-3 text-4xl rounded-sm w-[100%] sm:text-3xl sm:py-3 sm:mb-3 md:text-2xl md:py-2 md:mb-2 lg:text-xl lg:mb-1 lg:py-1 xl:text-base" type="password" placeholder="Enter your password"></input>

                <button type="submit" className="mt-2 bg-[#F05941] mr-3 py-4 px-3 text-4xl text-white border-[1px] border-[#F05941] rounded-sm w-[100%] sm:text-3xl sm:py-3 md:text-2xl md:py-2 lg:text-xl lg:py-1 lg:mt-5 xl:text-lg xl:py-0 xl:mt-4">Sign Up</button>


            </form>

            <div className="separator my-3 text-3xl text-[#aca9a9ed] text-center md:text-2xl lg:text-xl xl:text-base">OR</div>

            <button className="py-4 px-3 text-4xl border-[1px] border-[#e9e9e980] bg-[#e9e9e980] text-[#555555] rounded-sm w-[100%] flex justify-center items-center sm:text-3xl sm:py-3 md:text-2xl md:py-2 lg:text-xl lg:py-1 xl:text-lg xl:py-0">Sign Up with Google<i className='bx bxl-google text-[#555555] pl-1' ></i></button>

            </div>
        </Modal>
        
    );
}

export default SignUp;