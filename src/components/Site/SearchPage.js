import React, { useContext, useState } from 'react';
import notificationContext from '../../ctx/notificationContext';
import Card from '../../ui/Card';
import CardSkeleton from '../../ui/skeletons/CardSkeleton';
import { useNavigate } from 'react-router-dom';

function SearchPage() {

    const notificationCtx = useContext(notificationContext);
    const [isLoading, setIsLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [result, setResult] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const [notFoundTxt, setNotFoundTxt] = useState("");

    const goToPrevPageHandler = ()=>{
        return navigate(-1);
    }

    const searchHandler = (e)=>{

        e.preventDefault();
        if(searchQuery === ''){
            return;
        }
        setIsLoading(true);

        fetch("https://flavourfound.onrender.com/foods/search", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                searchQuery: searchQuery
            })
        })
        .then(response => response.json())
        .then(resData => {
            if(resData.status === 200){
                setResult(resData.result);
                if(resData.result.length === 0){
                    setNotFoundTxt(searchQuery);
                    setNotFound(true);
                }
                else{
                    setNotFound(false);
                }
                setSearchQuery('');
                setIsLoading(false);
            }
            else{
                throw Error(resData.msg);
            }
        })
        .catch(err => notificationCtx.showNotification(true, err.message));
    }

  return (
    <div className='flex-1'>
        <div className='my-5 text-4xl mx-5 cursor-pointer text-[#404040] hover:text-[#f05941]sm:text-3xl md:text-2xl lg:text-xl xl:text-xl xl:my-1' onClick={goToPrevPageHandler}><i className='bx bx-left-arrow-alt'></i>Go back</div>
      
      <form onSubmit={searchHandler} className='flex justify-center gap-x-1 mb-3'>
        <input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} type='text' className='text-[#4a4a4a] py-3 px-5 rounded-3xl text-4xl bg-[#e1e1e1] outline-none sm:text-3xl sm:py-2 md:text-2xl xl:text-lg xl:py-1' placeholder='Search something'></input>
        <button className='border-[#f05941] bg-[#f05941] text-white border-[1px] rounded-3xl cursor-pointer py-3 px-8 text-4xl hover:border-[#f4f4f4] hover:bg-[#f4f4f4] hover:text-[#686868] sm:py-2 sm:text-3xl md:text-2xl xl:text-lg xl:py-1 xl:px-5'>Search</button>
      </form>

      <div className='mx-auto my-7'>
        {isLoading && <div className='flex mx-4 flex-wrap gap-x-1 gap-y-2 justify-left'>
            {Array(6).fill(0).map((item, ind) => {
                return <CardSkeleton key={ind} />
            })}
            </div>
        }
        </div>
        {!notFound && !isLoading && result.length === 0 && <div className='flex justify-center text-5xl text-[#f05941] mt-7 md:text-4xl xl:text-3xl'>Find your favourite meal!</div>}

        {!isLoading && notFound && <div className='flex justify-center text-5xl text-[#f05941] mt-7 mt-7 md:text-4xl xl:text-3xl'>
            {`No results found for '${notFoundTxt}'`}   
        </div>}

        {!isLoading && result.length > 0 && <div className='flex my-5 flex-wrap gap-x-1 gap-y-2 mx-auto justify-start md:w-[910px] xl:w-[1226px]'>
            {result.map(item => <Card key={item._id} data={item} />)}    
        </div>}

    </div>
  )
}

export default SearchPage;
