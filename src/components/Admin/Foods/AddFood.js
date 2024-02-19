import React, { useRef, useContext } from 'react'
import notificationContext from '../../../ctx/notificationContext';
import authContext from '../../../ctx/authContext';

function AddFood(props) {
  const authCtx = useContext(authContext);
  const notificationCtx = useContext(notificationContext);
  const {url} = props;

  const nameRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  const stockRef = useRef();
  const ingredientsRef = useRef();
  const imagesRef = useRef();
  const categoryRef = useRef();

  const splitList = (data)=>{
    return data.split(",");
  }

  const formSubmitHandler = (e)=>{
    e.preventDefault();
    const ingredients_list = splitList(ingredientsRef.current.value);

    const formData = new FormData();

    formData.append("name", nameRef.current.value);
    formData.append("description", descRef.current.value);
    formData.append("price", priceRef.current.value);
    formData.append("stock", stockRef.current.value);
    formData.append("ingredients", ingredients_list);
    formData.append("category", categoryRef.current.value);
    formData.append("user_id", (authCtx.authenticated ? authCtx.id : undefined));

    for(let i=0; i<imagesRef.current.files.length; i++){
      formData.append("images", imagesRef.current.files[i]);
    }

    const config = {
      method: "POST",
      body: formData
    }

    fetch(url+'add-food', config)
    // fetch('http://localhost:80/admin/add-food', config)
      .then(response=>response.json())
      .then(resData=>{
        if(resData.status === 201){
          notificationCtx.showNotification(false, resData.msg);
        }
        else{
          throw Error(resData.msg);
        }
      })
      .catch(err=>{
        notificationCtx.showNotification(true, err.message)
      })
  }

  return (
    <div>
        <h1 className='text-6xl mt-2 mb-12 text-[#484b4bf2] text-center underline'>Add A Food Item</h1>

        <form onSubmit={formSubmitHandler} className='w-[90%]'>

          <input ref={nameRef} type="text" required className="text-4xl focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-2 py-4 px-3 rounded-sm w-[100%]" placeholder="Enter name"></input>

          <input ref={descRef} type="text" required className="text-4xl focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-2 py-4 px-3 rounded-sm w-[100%]" placeholder="Enter description"></input>

          <input ref={priceRef} type="number" required className="text-4xl focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-2 py-4 px-3 rounded-sm w-[100%]" placeholder="Enter price (in ₹)"></input>

          <input ref={stockRef} type="number" required className="text-4xl focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-2 py-4 px-3 rounded-sm w-[100%]" placeholder="Enter stock"></input>

          <input ref={ingredientsRef} type="text" required className="text-4xl focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-2 py-4 px-3 rounded-sm w-[100%]" placeholder="Enter ingredients"></input>
          
          <input ref={categoryRef} type="text" required className="text-4xl focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-2 py-4 px-3 rounded-sm w-[100%]" placeholder="Enter category"></input>

          <input ref={imagesRef} multiple type="file" accept='image/*' required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-2 text-4xl py-4 px-3 rounded-sm w-[100%]"></input>

          <div className='flex justify-end mt-2'>
            <button type='reset' className="text-4xl mt-2 mr-2 #515454 py-3 px-10 border-[1px] border-[#515454] rounded-3xl hover:bg-[#484b4bf2] hover:text-white">Reset</button>
            <button className="text-4xl mt-2 mr-2 #515454 py-3 px-10  border-[1px] border-[#515454] rounded-3xl hover:bg-[#484b4bf2] hover:text-white">Add</button>
          </div>

        </form>
    </div>
  )
}

export default AddFood