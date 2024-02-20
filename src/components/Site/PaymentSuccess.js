import React from 'react';
import SuccessImg from '../../assets/images/success.png';

function PaymentSuccess() {
  return (
    <div className='flex-1 flex flex-col items-center justify-center mx-auto'>
      <img src={SuccessImg} alt='Payment Successful' className='h-[400px] xl:h-[200px]'></img>
      <span className='text-7xl mt-8 mb-2 font-semibold sm:text-6xl lg:text-5xl xl:text-3xl'>Payment Successful</span>
      <span className='text-6xl sm:text-5xl lg:text-4xl xl:text-2xl'>Thank You!!!</span>
      </div>
  )
}

export default PaymentSuccess;
