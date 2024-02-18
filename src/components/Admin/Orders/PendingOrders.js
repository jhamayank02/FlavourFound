import React, { useEffect, useState, useContext } from 'react'
import Table from '../../../utils/Table';
import Loading from '../Loading';
import notificationContext from '../../../ctx/notificationContext';
import authContext from '../../../ctx/authContext';

const columns = [
  {
      "Header": "Order id",
      "accessor": "order_id"
  },
  {
    "Header": "Customer name",
    "accessor": "customer_name"
  },
  {
      "Header": "Email id",
      "accessor": "customer_email"
  },
  {
      "Header": "Ordered on",
      "accessor": "ordered_at"
  },
  {
      "Header": "Delivery by",
      "accessor": "delivered_by"
  },
  {
      "Header": "Order total",
      "accessor": "order_total"
  },
  {
      "Header": "Shipping address",
      "accessor": "shipping_address"
  }
]


function PendingOrders(props) {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const notificationCtx = useContext(notificationContext);
  const authCtx = useContext(authContext);

  const {url, fetchData, showEditOrderModal} = props;

  const fetchOrderDetails = (order_id)=>{

    fetchData(url+'order-details', "POST", {"order_id": order_id, user_id: authCtx.authenticated ? authCtx.id : undefined})
      .then(res=>{
        showEditOrderModal(res.order_details);
      })
      .catch(err=>{
        notificationCtx.showNotification(true, err.message)
      })
  }

  useEffect(()=>{

    setLoading(true);

    fetchData(url+'pending-orders', "POST", {user_id: authCtx.authenticated ? authCtx.id : undefined})
      .then(res=>{
        if(res.status === 200){
          const result = [];

          res.pending_orders.map((item)=>{
            result.push({
              order_id: item._id,
              customer_name: item.customer_name,
              customer_email: item.customer_email,
              ordered_at: (item.ordered_at === '' ? '' : new Date(item.ordered_at).toLocaleString()),
              delivery_by: (item.delivery_by === '' ? '' : new Date(item.delivery_by).toLocaleString()),
              order_total: item.total_amount,
              shipping_address: item.shipping_address
            })  
          })

          setData(result);
          setLoading(false);
        }
        else{
          throw Error(res.msg);
        }
      })
      .catch(err=>{
        notificationCtx.showNotification(true, err.message)
      })

  }, []);

  return (
    <div>
        <h1 className='text-3xl mt-2 mb-4 text-[#484b4bf2] text-center underline'>Pending Orders</h1>

        {loading && <Loading />}
        {!loading && <Table fetchDetails={fetchOrderDetails} columns={columns} data={data} />}
    </div>
  )
}

export default PendingOrders