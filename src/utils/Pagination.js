import React from 'react';

const Pagination = ({totalPages, currPage, paginate}) => {
  
    const pages = [];
    for(let i=1; i<=totalPages; i++){
        pages.push(i);
    }
  
    return (
    <div>
      
      {pages.map((page)=> {
            return <span key={page} onClick={() => paginate(page)} className={`${page === currPage ? 'border-[#f05941] bg-[#f05941] text-white' : 'border-[#f4f4f4] bg-[#f4f4f4] text-[#686868]'} rounded-3xl border-[1px] cursor-pointer py-3 px-8 text-3xl mr-2 sm:text-2xl sm:py-2 sm:rounded-2xl md:text-xl md:rounded-3xl lg:text-xl lg:py-1 lg:px-5`}>{page}</span>
      })}

    </div>
  )
}

export default Pagination;
