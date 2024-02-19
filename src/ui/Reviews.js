import React from 'react'

function Reviews({reviews}) {
  return (
    <div className='mt-6'>
      {reviews.length === 0 && <p className='text-3xl text-[#2d2d2de8]'>No reviews yet.</p>}
      {reviews.map(review => {
        return <div className="review-card border-b-[1px] py-3 border-[#cecece]">
                    <div className="name font-[500] text-[#2d2d2de8] text-4xl">{review.customer_name}</div>
                    <div className="stars">
                      {Array(Number(review.stars)).fill(0).map(()=> {
                        return <i className='bx bxs-star text-[#0f9c00] text-3xl'></i>
                      })}
                      {Array(5-Number(review.stars)).fill(0).map(()=> {
                        return <i className='bx bx-star text-[#0000008c] text-3xl'></i>
                      })}
                    </div>
                    <div className="desc text-[#2d2d2de8] text-3xl">{review.feedback}</div>
                </div>
      })}
    </div>
  )
}

export default Reviews;