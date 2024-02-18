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
            <div className="login-container">

            <form onSubmit={signupHandler}>

                <h1 className="text-3xl mb-5 text-[#2d2d2de8]">Create a new account</h1>

                <input ref={nameRef} type="text" required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-2 py-1 px-3 rounded-sm w-[100%]" placeholder="Enter your name"></input>

                <input ref={contactNoRef} type="tel" required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-2 py-1 px-3 rounded-sm w-[100%]" placeholder="Enter your contact no."></input>

                <input ref={emailRef} type="email" required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-2 py-1 px-3 rounded-sm w-[100%]" placeholder="Enter your email id"></input>

                <input ref={passwordRef} required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-2 py-1 px-3 rounded-sm w-[100%]" type="password" placeholder="Enter your password"></input>

                <button type="submit" className="mt-2 bg-[#F05941] mr-3 py-1 px-10 text-white border-[1px] border-[#F05941] rounded-sm w-[100%]">Sign Up</button>


            </form>

            <div className="separator my-3 text-xl text-[#aca9a9ed] text-center ">OR</div>

            <button className="py-1 px-10 border-[1px] border-[#e9e9e980] bg-[#e9e9e980] text-[#555555] rounded-sm w-[100%] flex justify-center items-center">Sign Up with Google<i className='bx bxl-google text-[#555555] pl-1' ></i></button>

            </div>
        </Modal>
        
    );
}

export default SignUp;