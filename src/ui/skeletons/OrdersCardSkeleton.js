import React from 'react'
import Skeleton from 'react-loading-skeleton'

function OrdersCardSkeleton() {
  return (
    <div>
      <div className='mb-1 border-[1px] border-[#dbdbdb] py-1 px-2 rounded'>
                <div className='text-4xl sm:text-3xl xl:text-lg'><Skeleton /></div>
                <div className='mt-1 mb-1 text-3xl sm:text-2xl xl:text-base xl:mt-[-4px] w-[30%]'><Skeleton /></div>
                <div className='text-2xl sm:text-xl xl:text-sm w-[50%]'><Skeleton /></div>
                <div className='text-2xl sm:text-xl xl:text-sm w-[50%]'><Skeleton /></div>
                <div className='text-2xl sm:text-xl xl:text-sm w-[50%]'><Skeleton /></div>
                <div className='mt-2 text-3xl sm:text-2xl xl:text-base xl:mt-0 w-[20%]'><Skeleton height={20} /></div>
      </div>
    </div>
  )
}

export default OrdersCardSkeleton
