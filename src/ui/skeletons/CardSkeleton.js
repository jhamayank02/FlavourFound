import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function CardSkeleton() {
  return (
    <div className="card w-[330px] max-[700px]:w-[160px]">
        
        <div className="card-content border-[#f4f4f4] border-[1px] overflow-hidden rounded-md">

            <div className='bg-[#ececec] max-[700px]:hidden'><Skeleton height={300}/></div>
            <div className='bg-[#ececec] min-[600px]:hidden'><Skeleton height={150}/></div>

            <div className="bg-white p-2">

                <div className="text-3xl max-[700px]:text-xl"><Skeleton width={'80%'} /></div>
                {/* <div className="text-xl mt-[-6px] max-[700px]:text-lg"><Skeleton /></div> */}
                <div className="mt-2 flex justify-between items-center">
                    <div className="price text-xl font-[500] text-lg"><Skeleton /></div>
                    <div><Skeleton height={40} width={100}/></div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default CardSkeleton;
