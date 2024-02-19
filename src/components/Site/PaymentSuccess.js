import React from 'react';
import SuccessImg from '../../assets/images/success.png';

function PaymentSuccess() {
  return (
    <div className='flex-1 flex flex-col items-center justify-center mx-auto'>
      <img src={SuccessImg} alt='Payment Successful' className='h-[400px]'></img>
      <span className='text-7xl mt-8 mb-2 font-semibold'>Payment Successful</span>
      <span className='text-6xl'>Thank You!!!</span>
      </div>
  )
}

export default PaymentSuccess;
