import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function CardSkeleton() {
  return (
    <div className="card w-[470px]">
        
        <div className="card-content border-[#f4f4f4] border-[1px] overflow-hidden rounded-md">

            <div className='bg-[#ececec]'><Skeleton height={450}/></div>

            <div className="bg-white p-2">
                <div className="text-5xl w-[80%]"><Skeleton/></div>
                <div className="mt-2 flex justify-between items-center">
                    <div className="price text-4xl w-[40%]"><Skeleton/></div>
                    <div className='price text-4xl w-[30%]'><Skeleton/></div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default CardSkeleton;
