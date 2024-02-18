import React from 'react';
import SuccessImg from '../../assets/images/success.png';

function PaymentSuccess() {
  return (
    <div className='flex flex-col items-center justify-center mx-auto h-[200px] rounded w-[300px] bg-[#189100] text-white'>
      <img src={SuccessImg} alt='Payment Successful' className='h-[100px]'></img>
      <span className='text-3xl'>Payment Successful</span>
      <span className='text-xl'>Thank You!!!</span>
      </div>
  )
}

export default PaymentSuccess;
