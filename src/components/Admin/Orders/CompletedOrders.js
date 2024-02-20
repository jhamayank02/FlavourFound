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
      "Header": "Delivered on",
      "accessor": "delivered_on"
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

function CompletedOrders(props) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const notificationCtx = useContext(notificationContext);
  const authCtx = useContext(authContext);

  const {url, fetchData} = props;

  useEffect(()=>{

    setLoading(true);

    fetchData(url+'completed-orders', "POST", {user_id: authCtx.authenticated ? authCtx.id : undefined})
      .then(res=>{
        if(res.status === 200){
          const result = [];

          res.completed_orders.map((item)=>{
            result.push({
              order_id: item._id,
              customer_name: item.customer_name,
              customer_email: item.customer_email,
              ordered_at: (item.ordered_at === '' ? '' : new Date(item.ordered_at).toLocaleString()),
              delivered_on: (item.delivered_on === undefined  ? 'Pending' : new Date(item.delivered_on).toLocaleString()),
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
        <h1 className='text-6xl mt-2 mb-12 text-[#484b4bf2] text-center underline sm:text-5xl lg:text-4xl xl:text-3xl xl:mb-6'>Completed Orders</h1>

        {loading && <Loading />}
        {!loading && <Table columns={columns} data={data} />}
    </div>
  )
}

export default CompletedOrders