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
          <h1 className='text-3xl mt-2 mb-4 text-[#484b4bf2] text-center underline'>Edit food item</h1>

          <form onSubmit={formSubmitHandler} className='w-[400px] mx-auto max-[600px]:w-[90%]'>

            <label className='text-[#515454]'>Food id</label>
            <input disabled ref={foodIdRef} type="text" required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-2 py-1 px-3 rounded-sm w-[100%] bg-[#c1c0bf99] cursor-not-allowed"></input>

            <label className='text-[#515454]'>Description</label>
            <input ref={descriptionRef} type="text" required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-2 py-1 px-3 rounded-sm w-[100%]"></input>

            <label className='text-[#515454]'>Stock</label>
            <input ref={stockRef} type="text" required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-2 py-1 px-3 rounded-sm w-[100%]"></input>
            
            <label className='text-[#515454]'>Price</label>
            <input ref={priceRef} type="number" required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-2 py-1 px-3 rounded-sm w-[100%]"></input>

            <div className='flex justify-end mt-2'>
              <button onClick={hideEditFoodModal} className="mt-2 mr-2 #515454 py-1 px-4 border-[1px] border-[#515454] rounded-2xl hover:bg-[#484b4bf2] hover:text-white">Close</button>
              <button className="mt-2 mr-2 #515454 py-1 px-4  border-[1px] border-[#515454] rounded-2xl hover:bg-[#484b4bf2] hover:text-white">Update</button>
              <button onClick={deleteFoodHandler} className="mt-2 mr-2 #515454 py-1 px-4  border-[1px] border-[#515454] rounded-2xl hover:bg-[#484b4bf2] hover:text-white">Delete</button>
            </div>

          </form>
      </Modal>
    </>
    
  )
}

export default EditFood;