import React, { useContext, useEffect, useRef, useState } from 'react';
import Modal from '../../../ui/Modal';
import notificationContext from '../../../ctx/notificationContext';
import authContext from '../../../ctx/authContext';

function EditOrder(props) {
    const authCtx = useContext(authContext);
    const notificationCtx = useContext(notificationContext);
    const {hideEditOrderModal, orderDetails, url, fetchData} = props;

    const orderIdRef = useRef();
    const shippingAddressRef = useRef();
    const deliveredRef = useRef();

    const formSubmitHandler = (e)=>{
      e.preventDefault();

      fetchData(url+'update-order', "POST", {
        order_id: orderIdRef.current.value,
        shipping_address: shippingAddressRef.current.value,
        delivered: deliveredRef.current.value,
        user_id: authCtx.authenticated ? authCtx.id : undefined
      }).then(resData=>{
          if(resData.status === 200){
            notificationCtx.showNotification(false, resData.msg);
            hideEditOrderModal();
          }
          else{
            throw Error(resData.msg)
          }
      }).catch(err=>{
        notificationCtx.showNotification(true, err.message);
      })
    }

    useEffect(()=>{
      orderIdRef.current.value = orderDetails._id;
      deliveredRef.current.value = orderDetails.delivered;
      shippingAddressRef.current.value = orderDetails.shipping_address;
    })

  return (
    <>
      <Modal hideModal={hideEditOrderModal}>
          <h1 className='text-6xl mt-2 mb-12 text-[#484b4bf2] text-center underline sm:text-5xl lg:text-4xl lg:mb-8xl:text-2xl xl:mb-4'>Edit order</h1>

          <form onSubmit={formSubmitHandler} className='w-[90%] mx-auto'>

            <label className='text-3xl text-[#515454] sm:text-2xl sm:text-2xl lg:text-xl lg:text-xl xl:text-base'>Order id</label>
            <input disabled ref={orderIdRef} type="text" required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-4 py-4 text-4xl px-3 rounded-md w-[100%] bg-[#c1c0bf99] cursor-not-allowed sm:text-3xl sm:py-3 sm:mb-3 md:text-2xl md:mb-2 md:py-2 lg:text-2xl lg:py-1 xl:text-base xl:py-1"></input>

            <label className='text-3xl text-[#515454] sm:text-2xl sm:text-2xl lg:text-xl lg:text-xl xl:text-base'>Shipping address</label>
            <input ref={shippingAddressRef} type="text" required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-4 py-4 text-4xl px-3 rounded-md w-[100%] sm:text-3xl sm:py-3 sm:mb-3 md:text-2xl md:mb-2 md:py-2 lg:text-2xl lg:py-1 xl:text-base xl:py-1"></input>

            <label className='text-3xl text-[#515454] sm:text-2xl sm:text-2xl lg:text-xl lg:text-xl xl:text-base'>Order delivered (true/false)</label>
            <input ref={deliveredRef} type="text" required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-4 py-4 text-4xl px-3 rounded-md w-[100%] sm:text-3xl sm:py-3 sm:mb-3 md:text-2xl md:mb-2 md:py-2 lg:text-2xl lg:py-1 xl:text-base xl:py-1"></input>

            <div className='flex justify-end mt-2'>
              <button onClick={hideEditOrderModal} className="mt-2 mr-2 py-4 px-10 text-4xl border-[1px] border-[#515454] rounded-3xl hover:bg-[#484b4bf2] hover:text-white sm:py-3 sm:text-3xl md:text-2xl md:py-2 md:px-6 lg:text-xl lg:py-1 lg:px-4 xl:text-base xl:py-1">Close</button>
              <button className="mt-2 mr-2 py-4 px-10 text-4xl border-[1px] border-[#515454] rounded-3xl hover:bg-[#484b4bf2] hover:text-white sm:py-3 sm:text-3xl md:text-2xl md:py-2 md:px-6 lg:text-xl lg:py-1 lg:px-4 xl:text-base xl:py-1">Update</button>
            </div>

          </form>
      </Modal>
    </>
    
  )
}

export default EditOrder