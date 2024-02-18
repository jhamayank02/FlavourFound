import React, { useContext, useEffect, useState } from 'react'
import Modal from '../../ui/Modal'
import authContext from '../../ctx/authContext'
import OrdersCardSkeleton from '../../ui/skeletons/OrdersCardSkeleton';
import notificationContext from '../../ctx/notificationContext';

function MyOrders({hideMyOrdersModal}) {

    const [orderedItems, setOrderedItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const authCtx = useContext(authContext);
    const notificationCtx = useContext(notificationContext);

    useEffect(()=>{

        setIsLoading(true);

        fetch("https://flavourfound.onrender.com/order/all-orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                customer_id: authCtx.id
            })
        })
        .then(response=>response.json())
        .then(resData=>{
            if(resData.status === 200){
                setIsLoading(false);
                setOrderedItems(resData.orders);
            }
            else{
                throw Error(resData.message);
            }
        })
        .catch(err=> notificationContext.showNotification(true, err.message));
    }, [])

  return (
    <Modal hideModal={hideMyOrdersModal}>
        <h1 className="text-3xl mb-4 text-[#2d2d2de8]">Your Orders</h1>
        <div className='max-h-[355px] overflow-x-hidden overflow-y-scroll pr-[2px]'>

        {isLoading && Array(3).fill(0).map((item, ind)=>{
            return <OrdersCardSkeleton key={ind} />
        })}

        {!isLoading && orderedItems.length === 0 && <h1 className="text-2xl mb-2 text-[#2d2d2de8]">You do not have any past orders.</h1>}
        {!isLoading && orderedItems.length > 0 && orderedItems.map((item)=>{
            return <div key={item._id} className='mb-1 border-[1px] border-[#dbdbdb] py-1 px-2 rounded'>
                <div className='text-[#000000b8] flex items-end'>
                    <span className=''>Ordered items : </span>
                    <ul className='ml-1 flex'>
                        {item.ordered_items.map(order=><li key={order._id}>{order.food_item}, </li>)}
                    </ul>
                </div>
                {item.delivered && <div className='text-sm text-[green] font-medium mt-[-5px] mb-1'>Delivered</div>}
                {!item.delivered && <div className='text-[#df9c00] text-sm font-medium mt-[-5px] mb-1'>On the way</div>}
                <div className='text-[#000000b8] text-sm'>Ordered at : {new Date(item.ordered_at).toLocaleString()}</div>
                {!item.delivered && <div className='text-[#000000b8] text-sm'>Expected delivery : {new Date(item.delivered_by).toLocaleString()}</div>}
                {item.delivered && <div className='text-[#000000b8] text-sm'>Delivered on : {item.delivered_on !== undefined ? new Date(item.delivered_on).toLocaleString() : ''}</div>}
                <div className='text-[#000000b8] text-sm'>Delivered on : {item.shipping_address}</div>
                <div className='font-semibold mt-1 text-[#eb1212ad] text-[15px]'><span>Order total</span> : {item.total_amount}₹</div>
            </div>
        })}

        <div className='flex justify-end mt-4'>
            <button onClick={hideMyOrdersModal} className="py-1 px-5 mr-0 ml-auto  border-[1px] border-[#e9e9e980] bg-[#e9e9e980] text-[#555555] rounded-2xl hover:bg-[#F05941] hover:text-white hover:border-[#F05941]">Close</button>
        </div>
        </div>
    </Modal>
  )
}

export default MyOrders
