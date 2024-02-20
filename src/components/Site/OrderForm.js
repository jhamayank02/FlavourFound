import { useContext, useRef } from "react";
import {useNavigate} from 'react-router-dom';
import Modal from "../../ui/Modal";
import cartContext from "../../ctx/cartContext";
import authContext from "../../ctx/authContext";
import notificationContext from "../../ctx/notificationContext";

const OrderForm = ({hideOrderFormHandler})=>{

    const cartCtx = useContext(cartContext);
    const authCtx = useContext(authContext);
    const notificationCtx = useContext(notificationContext);
    const navigate = useNavigate();

    const lineRef = useRef();
    const postalCodeRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const countryRef = useRef();

    const proceedToPayment = async (e) => {
        e.preventDefault()
        
        fetch("https://flavourfound.onrender.com/payments/payment-secret", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                line: lineRef.current.value,
                postal_code: postalCodeRef.current.value,
                city: cityRef.current.value,
                state: stateRef.current.value,
                country: countryRef.current.value,
                customer_id: authCtx.id
            })
        })
        .then(response => response.json())
        .then(resData=> {
            if(resData.status === 200){
                hideOrderFormHandler();
                navigate('/payment-page', {state: {client_secret: resData.client_secret}});
            }
            else{
                throw Error(resData.msg);
            }
        })
        .catch(err=>{
            notificationCtx.showNotification(true, err.message);
        })

    }

    return <Modal hideModal={hideOrderFormHandler}>
            <div className="w-[90%] py-4 mx-auto order-container md:w-[95%] md:h-[460px] lg:h-[400px]">


        <form onSubmit={proceedToPayment}>

            <h1 className="text-6xl mb-12 text-[#2d2d2de8] sm:text-5xl md:mb-8 lg:mb-6 lg:text-4xl">Shipping details</h1>

            <input ref={lineRef} type="text" required className="text-4xl focus:outline-1 focus:outline-[rgb(201,201,201)] border-[1px] mb-4 py-1 px-3 rounded-sm w-[100%] sm:text-3xl sm:mb-3 md:text-2xl md:mb-2 lg:text-xl lg:py-1 lg:mb-1" placeholder="Street/House No./Apartment"></input>
            <input ref={postalCodeRef} required type="number" className="text-4xl focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-4 py-1 px-3 rounded-sm w-[100%] sm:text-3xl sm:mb-3 md:text-2xl md:mb-2 lg:text-xl lg:py-1 lg:mb-1" placeholder="Postal Code"></input>
            <input ref={cityRef} required type="text" className="text-4xl focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-4 py-1 px-3 rounded-sm w-[100%] sm:text-3xl sm:mb-3 md:text-2xl md:mb-2 lg:text-xl lg:py-1 lg:mb-1" placeholder="City"></input>
            <input ref={stateRef} required type="text" className="text-4xl focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-4 py-1 px-3 rounded-sm w-[100%] sm:text-3xl sm:mb-3 md:text-2xl md:mb-2 lg:text-xl lg:py-1 lg:mb-1" placeholder="State"></input>
            <input ref={countryRef} required type="text" className="text-4xl focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-4 py-1 px-3 rounded-sm w-[100%] sm:text-3xl sm:mb-3 md:text-2xl md:mb-2 lg:text-xl lg:py-1 lg:mb-1" placeholder="Country"></input>

            <div className="flex justify-end my-5 text-4xl sm:text-3xl lg:text-2xl"><span className="font-semibold">Order Total :</span><span>&nbsp;{cartCtx.total_amount}₹</span></div>

            <div className="actions flex justify-end my-3">
                <button onClick={hideOrderFormHandler} type="submit" className="py-3 mr-3 px-10 border-[1px] border-[#e9e9e980] bg-[#e9e9e980] text-[#555555] text-4xl rounded-3xl sm:text-3xl sm:py-2 md:text-2xl lg:text-xl lg:py-1">Close</button>
                <button type="submit" className="bg-[#F05941] py-3 px-10 text-white border-[1px] border-[#F05941] text-4xl rounded-3xl sm:text-3xl sm:py-2 md:text-2xl lg:text-xl lg:py-1">Proceed</button> 
            </div>

        </form>

        </div>
    </Modal>
}

export default OrderForm;