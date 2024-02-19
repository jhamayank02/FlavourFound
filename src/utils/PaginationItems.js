import React from 'react'
import Card from '../ui/Card';
import CardSkeleton from '../ui/skeletons/CardSkeleton';

function PaginationItems({items, isLoading}) {
    return <div className='flex flex-wrap gap-y-2 gap-x-2'>
        {isLoading && Array(6).fill(0).map((item, ind) => {
            return <CardSkeleton key={ind} />
        })}
        {!isLoading && items.map(item => <Card key={item._id} data={item} />)}
    </div>
}

export default PaginationItems;
