import React from 'react'
import Skeleton from 'react-loading-skeleton'

function OrdersCardSkeleton() {
  return (
    <div>
      <div className='mb-1 border-[1px] border-[#dbdbdb] py-1 px-2 rounded'>
                <div className='text'><Skeleton /></div>
                <div className='text-sm mt-[-5px] mb-1'><Skeleton /></div>
                <div className='text-sm'><Skeleton /></div>
                <div className='text-sm'><Skeleton /></div>
                <div className='text-sm'><Skeleton /></div>
                <div className='text-[15px] mt-1'><Skeleton /></div>
      </div>
    </div>
  )
}

export default OrdersCardSkeleton
