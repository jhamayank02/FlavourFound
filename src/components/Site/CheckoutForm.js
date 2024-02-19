import React, { useContext, useState } from 'react';
import {useStripe, useElements} from '@stripe/react-stripe-js';
import {PaymentElement} from '@stripe/react-stripe-js';
import notificationContext from '../../ctx/notificationContext';

function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();

    const [isProcessing, setIsProcessing] = useState(null);
    const notificationCtx = useContext(notificationContext);

    const handleSubmit = async (e)=>{
        e.preventDefault();

        if(!stripe || !elements){
            return;
        }

        setIsProcessing(true);

        const {error} = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // return_url: `${window.location.origin}/#/payment-success`
                return_url: 'https://flavourfound.onrender.com/payments/payment-status'
            }
        })

        if(error){
            notificationCtx.showNotification(true, error.message);
        }

        setIsProcessing(false);
    }


  return (
    <form id='payment-form' onSubmit={handleSubmit}>
        <div className='text-4xl'>
            <PaymentElement />
        </div>

        <div className='flex justify-end'>
            <button disabled={isProcessing} className='mt-6 py-3 text-4xl px-5 border-[1px] border-[#F05941] bg-[#F05941] text-white rounded-3xl hover:bg-[#e9e9e980] hover:text-[#555555] hover:border-[#e9e9e980] disabled:bg-[#e9e9e980] disabled:text-[#555555] disabled:border-[#e9e9e980] disabled:cursor-not-allowed' id='submit'>
                <span id='button-text'>
                    {isProcessing ? "Processing..." : "Pay Now"}
                </span>
            </button>
        </div>
    </form>
  )
}

export default CheckoutForm;
