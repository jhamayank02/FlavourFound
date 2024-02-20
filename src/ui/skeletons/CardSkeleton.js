import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function CardSkeleton() {
  return (
    <div className="card w-[470px] md:w-[300px]">
        
        <div className="card-content border-[#f4f4f4] border-[1px] overflow-hidden rounded-md">

            <div className='mt-[-4px] bg-[#ececec] w-[100%] hidden md:h-[300px] md:block'><Skeleton height={300}/></div>

            <div className='mt-[-4px] bg-[#ececec] w-[100%] h-[450px] object-cover block md:hidden'><Skeleton height={450}/></div>

            <div className="bg-white p-2">
                <div className="name text-5xl font-[500] sm:text-4xl md:text-3xl xl:text-2xl w-[80%]"><Skeleton/></div>
                <div className="t-4 flex justify-between items-center sm:mt-2 xl:mt-1">
                    <div className="price text-4xl sm:text-3xl md:text-2xl lg:text-xl w-[40%]"><Skeleton/></div>
                    <div className='price text-4xl w-[30%]'><Skeleton/></div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default CardSkeleton;
