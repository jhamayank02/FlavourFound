import React, { useContext, useEffect, useState } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useActionData, useLocation, useNavigate } from 'react-router-dom';
import notificationContext from '../../ctx/notificationContext';

function PaymentPage() {
    const notificationCtx = useContext(notificationContext);
    const [stripePromise, setStripePromise] = useState(null);
    const location = useLocation();
    const clientSecret = location.state.client_secret;
    const navigate = useNavigate();

    const goToPrevPageHandler = ()=>{
        return navigate(-1);
    }

    useEffect(()=>{
        fetch("https://flavourfound.onrender.com/payments/payment-publishable-key")
        .then(response=> response.json())
        .then(resData=>{
            if(resData.status === 200){
                setStripePromise(loadStripe(resData.publishable_key));
            }
            else{
                throw Error(resData.msg);
            }
        })
        .catch(err=>{
            notificationCtx.showNotification(true, err.message);
        })
    }, []);

  return (
    <div className='flex-1'>
        <div className='my-5 text-4xl mx-5 cursor-pointer text-[#404040] hover:text-[#f05941] sm:text-3xl md:text-2xl lg:text-xl' onClick={goToPrevPageHandler}><i className='bx bx-left-arrow-alt'></i>Go back</div>

        <div className='w-[90%] mx-auto mt-2 xl:w-[450px]'>
            <h1 className='text-6xl mb-12 text-[#2d2d2de8] sm:text-5xl lg:text-4xl'>Checkout Page</h1>
            {stripePromise && clientSecret && <Elements stripe={stripePromise} options={{clientSecret}}>
                <CheckoutForm />
            </Elements>}
        </div>
        
    </div>
  )
}

export default PaymentPage;
