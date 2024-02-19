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
        <h1 className="px-2 text-6xl mb-10 text-[#2d2d2de8]">Your Orders</h1>
        <div className='max-h-[1100px] overflow-x-hidden overflow-y-scroll px-2'>

        {isLoading && Array(3).fill(0).map((item, ind)=>{
            return <OrdersCardSkeleton key={ind} />
        })}

        {!isLoading && orderedItems.length === 0 && <h1 className="text-5xl mb-2 text-[#2d2d2de8]">You do not have any past orders.</h1>}
        {!isLoading && orderedItems.length > 0 && orderedItems.map((item)=>{
            return <div key={item._id} className='mb-1 border-[1px] border-[#dbdbdb] py-3 px-3 rounded'>
                <div className='text-[#000000b8] flex items-end text-4xl'>
                    <span className=''>Ordered items : </span>
                    <ul className='ml-1 flex'>
                        {item.ordered_items.map(order=><li key={order._id}>{order.food_item}, </li>)}
                    </ul>
                </div>
                {item.delivered && <div className='text-[green] font-medium mt-1 mb-1 text-3xl'>Delivered</div>}
                {!item.delivered && <div className='text-[#df9c00] font-medium mt-1 mb-1 text-3xl'>On the way</div>}
                <div className='text-[#000000b8] text-2xl'>Ordered at : {new Date(item.ordered_at).toLocaleString()}</div>
                {!item.delivered && <div className='text-[#000000b8] text-2xl'>Expected delivery : {new Date(item.delivered_by).toLocaleString()}</div>}
                {item.delivered && <div className='text-[#000000b8] text-2xl'>Delivered on : {item.delivered_on !== undefined ? new Date(item.delivered_on).toLocaleString() : ''}</div>}
                <div className='text-[#000000b8] text-2xl'>Delivered on : {item.shipping_address}</div>
                <div className='font-semibold mt-2 text-[#eb1212ad] text-3xl'><span>Order total</span> : {item.total_amount}₹</div>
            </div>
        })}

        <div className='flex justify-end mt-7 mb-2'>
            <button onClick={hideMyOrdersModal} className="py-3 px-10 text-4xl mr-0 ml-auto  border-[1px] border-[#e9e9e980] bg-[#e9e9e980] text-[#555555] rounded-3xl hover:bg-[#F05941] hover:text-white hover:border-[#F05941]">Close</button>
        </div>
        </div>
    </Modal>
  )
}

export default MyOrders
