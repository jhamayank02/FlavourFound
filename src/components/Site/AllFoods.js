import React, { useState, useEffect, useRef, useContext } from 'react';
import notificationContext from '../../ctx/notificationContext';
import CardSkeleton from '../../ui/skeletons/CardSkeleton';
import Card from '../../ui/Card';
import { useNavigate } from 'react-router-dom';

function AllFoods() {
    const notificationCtx = useContext(notificationContext);
    const [foodList, setFoodList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [updateList, setUpdateList] = useState(false);
    const categoryRef = useRef();
    const priceRef = useRef();
    const navigate = useNavigate();

    const goToPrevPageHandler = ()=>{
        return navigate(-1);
    }

    const applyFilterHandler = ()=>{
       setUpdateList(true);
    }

    useEffect(()=>{

        const url = "https://flavourfound.onrender.com/foods/filter";
        setFoodList([]);
        setIsLoading(true);

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                max_price: priceRef.current.value,
                category: categoryRef.current.value
            })
        }).then((response)=>{
            return response.json();
        }).then((data)=>{
            setFoodList(data.foodItems);
            setIsLoading(false);
            setUpdateList(false);
        }).catch(err=>notificationCtx.showNotification(true, err.message));

    }, [updateList])

  return (
    <div>
        <div className='mx-5 cursor-pointer text-[#404040] hover:text-[#f05941]' onClick={goToPrevPageHandler}><i className='bx bx-left-arrow-alt'></i>Go back</div>
        <h1 className="text-3xl mb-5 text-center text-[500]">All available meals</h1>

        <div className='flex justify-end mr-3 gap-x-2 mb-5 max-[600px]:flex-wrap  max-[600px]:gap-y-2'>
            <select ref={categoryRef} className='text-[#4a4a4a] py-1 px-5 rounded-lg bg-[#e1e1e1] outline-none max-[600px]:px-1'>
                <option value=''>Select a category</option>
                <option value='indian'>Indian</option>
                <option value='chinese'>Chinese</option>
                <option value='mexican'>Mexican</option>
                <option value='italian'>Italian</option>
            </select>
            <select ref={priceRef} className='text-[#4a4a4a] py-1 px-5 rounded-lg bg-[#e1e1e1] outline-none max-[600px]:px-1'>
                <option value=''>Select a price range</option>
                <option value='100'>Upto 100₹</option>
                <option value='300'>Upto 300₹</option>
                <option value='500'>Upto 500₹</option>
                <option value='700'>Upto 700₹</option>
                <option value='1000'>Upto 1000₹</option>
                <option value='1000000'>1000₹ and more</option>
            </select>
            <button onClick={applyFilterHandler} className='border-[#f05941] bg-[#f05941] text-white border-[1px] rounded-2xl cursor-pointer py-1 px-5 hover:border-[#f4f4f4] hover:bg-[#f4f4f4] hover:text-[#686868] max-[600px]:text-sm max-[600px]:px-2'>Apply</button>
        </div>

        <div className='mx-auto mt-4 w-[1400px] max-[392px]:w-[190px] max-[600px]:w-[370px] max-[700px]:w-[540px] max-[718px]:w-[100%] max-[1050px]:w-[720px] max-[1442px]:w-[1047px]'>
            <div className='flex mx-4 flex-wrap gap-x-3 gap-y-2 justify-left'>
                {isLoading && Array(6).fill(0).map((item, ind) => {
                        return <CardSkeleton key={ind} />
                })}

                {!isLoading && foodList.length === 0 &&  <div className='mx-auto text-3xl text-[#f05941] mt-7'>
            No results found</div>}
                {!isLoading && foodList.length > 0 && foodList.map(item => <Card key={item._id} data={item} />)}
            </div>
        </div>
    </div>
  )
}

export default AllFoods
