import React from 'react'

function Reviews({reviews}) {
  return (
    <div>
      {reviews.length === 0 && <p className='text-xl text-[#2d2d2de8]'>No reviews yet.</p>}
      {reviews.map(review => {
        return <div className="review-card border-b-[1px] border-[#cecece]">
                    <div className="name font-[500] text-[#40406b] text-[18px]">{review.customer_name}</div>
                    <div className="stars">
                      {Array(Number(review.stars)).fill(0).map(()=> {
                        return <i className='bx bxs-star text-[#0f9c00]'></i>
                      })}
                      {Array(5-Number(review.stars)).fill(0).map(()=> {
                        return <i className='bx bx-star text-[#0000008c]'></i>
                      })}
                    </div>
                    <div className="desc text-[#404990]">{review.feedback}</div>
                </div>
      })}
    </div>
  )
}

export default Reviews;