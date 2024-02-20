import React, { useEffect, useRef, useContext } from 'react';
import Modal from '../../../ui/Modal';
import notificationContext from '../../../ctx/notificationContext';
import authContext from '../../../ctx/authContext';

function EditFood(props) {

    const {hideEditFoodModal, foodDetails, url, fetchData} = props;

    const foodIdRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();
    const stockRef = useRef();
    const notificationCtx = useContext(notificationContext);
    const authCtx = useContext(authContext);

    const deleteFoodHandler = (e)=>{
      e.preventDefault();

      const confirm = window.confirm("Are you sure you want to delete this item?");

      if(confirm){
        fetchData(url+'delete-food', "POST", {
          id: foodIdRef.current.value,
          user_id: authCtx.authenticated ? authCtx.id : undefined
        })
        .then(resData=> {
          if(resData.status === 200){
            notificationCtx.showNotification(false, resData.msg);
            hideEditFoodModal();
          }
          else{
            throw Error(resData.msg);
          }
        })
        .catch(err=>{
          notificationCtx.showNotification(true, err.message)
        })
      }
    }

    const formSubmitHandler = (e)=>{
      e.preventDefault();
      
      fetchData(url+'update-food', "POST", {
        food_id: foodIdRef.current.value,
        price: priceRef.current.value,
        description: descriptionRef.current.value,
        stock: stockRef.current.value,
        user_id: authCtx.authenticated ? authCtx.id : undefined
      })
      .then(resData=> {
        if(resData.status === 200){
          notificationCtx.showNotification(false, resData.msg);
          hideEditFoodModal();
        }
        else{
          throw Error(resData.msg);
        }
      })
      .catch(err=>{
        notificationCtx.showNotification(true, err.message)
      })
    }

    useEffect(()=>{
      foodIdRef.current.value = foodDetails._id;
      priceRef.current.value = foodDetails.price;
      descriptionRef.current.value = foodDetails.description;
      stockRef.current.value = foodDetails.stock;
    })

  return (
    <>
      <Modal hideModal={hideEditFoodModal}>
          <h1 className='text-6xl mt-2 mb-12 text-[#484b4bf2] text-center underline sm:text-5xl lg:text-4xl lg:mb-8 xl:text-2xl xl:mb-4'>Edit food item</h1>

          <form onSubmit={formSubmitHandler} className='mx-auto w-[90%]'>

            <label className='text-3xl text-[#515454] sm:text-2xl lg:text-xl lg:text-xl xl:text-base'>Food id</label>
            <input disabled ref={foodIdRef} type="text" required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-2 py-4 text-4xl px-3 rounded-md w-[100%] bg-[#c1c0bf99] cursor-not-allowed sm:text-3xl sm:py-3 sm:mb-1 md:text-2xl md:mb-2 md:py-2 lg:text-2xl lg:py-1 xl:text-base xl:py-1"></input>

            <label className='text-3xl text-[#515454] sm:text-2xl lg:text-xl lg:text-xl xl:text-base'>Description</label>
            <input ref={descriptionRef} type="text" required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-2 py-4 text-4xl px-3 rounded-md w-[100%] sm:text-3xl sm:py-3 sm:mb-1 md:text-2xl md:mb-2 md:py-2 lg:text-2xl lg:py-1 xl:text-base xl:py-1"></input>

            <label className='text-3xl text-[#515454] sm:text-2xl lg:text-xl lg:text-xl xl:text-base'>Stock</label>
            <input ref={stockRef} type="text" required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-2 py4 text-4xl px-3 rounded-md w-[100%] sm:text-3xl sm:py-3 sm:mb-1 md:text-2xl md:mb-2 md:py-2 lg:text-2xl lg:py-1 xl:text-base xl:py-1"></input>
            
            <label className='text-3xl text-[#515454] sm:text-2xl lg:text-xl lg:text-xl xl:text-base'>Price</label>
            <input ref={priceRef} type="number" required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-2 py-4 text-4xl px-3 rounded-md w-[100%] sm:text-3xl sm:py-3 sm:mb-1 md:text-2xl md:mb-2 md:py-2 lg:text-2xl lg:py-1 xl:text-base xl:py-1"></input>

            <div className='flex justify-end mt-2'>
              <button onClick={hideEditFoodModal} className="mt-2 mr-2 py-4 text-4xl px-10 border-[1px] border-[#515454] rounded-3xl hover:bg-[#484b4bf2] hover:text-white sm:text-3xl sm:py-3 md:text-2xl md:py-2 md:px-6 lg:text-xl lg:py-1 lg:px-4 xl:text-base xl:py-1">Close</button>
              <button className="mt-2 mr-2 py-4 text-4xl px-10  border-[1px] border-[#515454] rounded-3xl hover:bg-[#484b4bf2] hover:text-white sm:text-3xl sm:py-3 md:text-2xl md:py-2 md:px-6 lg:text-xl lg:py-1 lg:px-4 xl:text-base xl:py-1">Update</button>
              <button onClick={deleteFoodHandler} className="mt-2 mr-2 py-4 text-4xl px-10  border-[1px] border-[#515454] rounded-3xl hover:bg-[#484b4bf2] hover:text-white sm:text-3xl sm:py-3 md:text-2xl md:py-2 md:px-6 lg:text-xl lg:py-1 lg:px-4 xl:text-base xl:py-1">Delete</button>
            </div>

          </form>
      </Modal>
    </>
    
  )
}

export default EditFood;