import React from 'react'
import Skeleton from 'react-loading-skeleton'

function ReviewSkeleton() {
  return (
    <div>
        <div className="text-[#40406b] text-4xl"><Skeleton /></div>
        <div className="flex">
            {Array(5).fill(0).map((item,ind)=>{
                return <Skeleton circle={true} height={60} width={60} />
            })}
        </div>
        <div className="text-[#404990] text-3xl"><Skeleton/></div>
    </div>
  )
}

export default ReviewSkeleton
