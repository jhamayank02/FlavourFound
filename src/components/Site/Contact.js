import './css/Contact.css';
import {useContext, useRef} from 'react';
import authContext from '../../ctx/authContext';
import notificationContext from '../../ctx/notificationContext';

const Contact = ()=>{
    const authCtx = useContext(authContext);
    const notificationCtx = useContext(notificationContext);
    const emailRef = useRef();
    const contactNoRef = useRef();
    const queryRef = useRef();

    const formSubmitHandler = (e)=>{
        e.preventDefault();

        if(authCtx.authenticated === false){
            notificationCtx.showNotification(true, "Login to submit your query.")
            return;
        }

        fetch('https://flavourfound.onrender.com/contact/query', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                customer_id: authCtx.id,
                contact_email: emailRef.current.value,
                contact_no: contactNoRef.current.value,
                contact_query: queryRef.current.value
            })
        }).then(response=> response.json())
        .then(resData=>{
            if(resData.status === 200){
                notificationCtx.showNotification(false, resData.msg);
            }
            else{
                throw Error(resData.msg);
            }
        })
        .catch(err=>{
            notificationCtx.showNotification(true, err.message);
        })
    }

    return <div className="contact-container py-3 mx-4 my-6">

        <h1 className="text-6xl mb-10 text-center font-normal sm:text-5xl lg:text-4xl xl:text-3xl xl:mb-4">Contact us</h1>

        <form onSubmit={formSubmitHandler} className='m-auto w-[90%] xl:w-[500px]'>

                <input ref={emailRef} type="email" required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-2 py-3 px-3 rounded-sm w-[100%] text-3xl sm:text-2xl sm:py-2 lg:text-xl lg:py-1 lg:mb-1 xl:text-base" placeholder="Enter your email id"></input>
                <input ref={contactNoRef} required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-2 py-3 px-3 rounded-sm w-[100%] text-3xl sm:text-2xl sm:py-2 lg:text-xl lg:py-1 lg:mb-1 xl:text-base" type="tel" placeholder="Enter your contact no."></input>
                <textarea ref={queryRef} required rows={7} className="resize-none focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-2 py-3 px-3 rounded-sm w-[100%] text-3xl sm:text-2xl sm:py-2 lg:text-xl lg:py-1 lg:mb-1 xl:text-base" type="tel" placeholder="Enter your query"></textarea>

                <button type="submit" className="mt-2 bg-[#F05941] text-3xl mr-3 py-3 px-10 text-white border-[1px] border-[#F05941] rounded-sm w-[100%] hover:border-[#e9e9e980] hover:bg-[#e9e9e980] hover:text-[#555555] sm:text-2xl sm:py-2 lg:text-xl lg:py-1 xl:text-base xl:py-1 xl:mt-0">Get a callback</button>

            </form>

    </div>
}

export default Contact;