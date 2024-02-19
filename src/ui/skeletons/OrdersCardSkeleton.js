import React from 'react'
import Skeleton from 'react-loading-skeleton'

function OrdersCardSkeleton() {
  return (
    <div>
      <div className='mb-1 border-[1px] border-[#dbdbdb] py-1 px-2 rounded'>
                <div className='text-4xl w-[90%]'><Skeleton /></div>
                <div className='mt-1 mb-1 text-3xl w-[40%]'><Skeleton /></div>
                <div className='mt-1 mb-1 text-3xl w-[40%]'><Skeleton /></div>
                <div className='mt-1 mb-1 text-3xl w-[40%]'><Skeleton /></div>
                <div className='mt-1 mb-1 text-3xl w-[40%]'><Skeleton /></div>
                <div className='text-4xl mt-1 w-[30%]'><Skeleton /></div>
      </div>
    </div>
  )
}

export default OrdersCardSkeleton
