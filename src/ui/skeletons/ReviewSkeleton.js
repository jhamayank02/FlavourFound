import React from 'react'
import Skeleton from 'react-loading-skeleton'

function ReviewSkeleton() {
  return (
    <div>
        <div className="text-[#40406b]"><Skeleton width={120} /></div>
        <div className="flex">
            {Array(5).fill(0).map((item,ind)=>{
                return <Skeleton circle={true} height={30} width={30} />
            })}
        </div>
        <div className="text-[#404990]"><Skeleton /></div>
    </div>
  )
}

export default ReviewSkeleton
