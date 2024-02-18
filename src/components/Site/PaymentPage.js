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
    <div>
        <div className='mx-5 cursor-pointer text-[#404040] hover:text-[#f05941]' onClick={goToPrevPageHandler}><i className='bx bx-left-arrow-alt'></i>Go back</div>

        <div className='w-[400px] mx-auto mt-2'>
            <h1 className='text-3xl mb-5 text-[#2d2d2de8]'>Checkout Page</h1>
            {stripePromise && clientSecret && <Elements stripe={stripePromise} options={{clientSecret}}>
                <CheckoutForm />
            </Elements>}
        </div>
        
    </div>
  )
}

export default PaymentPage;
