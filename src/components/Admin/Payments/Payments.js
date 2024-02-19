import React from 'react';
import { useEffect, useState, useContext } from 'react'
import Table from '../../../utils/Table';
import Loading from '../Loading';
import notificationContext from '../../../ctx/notificationContext';
import authContext from '../../../ctx/authContext';

const columns = [
  {
      "Header": "Status",
      "accessor": "status"
  },
  {
    "Header": "Currency",
    "accessor": "currency"
  },
  {
      "Header": "Amount",
      "accessor": "amount"
  },
  {
      "Header": "Order id",
      "accessor": "order_id"
  },
  {
      "Header": "Customer id",
      "accessor": "customer_id"
  },
  {
      "Header": "Payment id",
      "accessor": "payment_id"
  }
]

function Payments(props) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const notificationCtx = useContext(notificationContext);
  const authCtx = useContext(authContext);

  const {url, fetchData} = props;

  useEffect(()=>{

    setLoading(true);

    fetchData(url+'/payments', "POST", {user_id: authCtx.authenticated ? authCtx.id : undefined})
      .then(res=>{
        if(res.status === 200){
          const result = [];

          res.payments.map((item)=>{
            result.push({
              customer_id: item.customer_id,
              payment_id: item.payment_id,
              order_id: item.order_id,
              amount: item.amount,
              currency: item.currency,
              status: item.status,
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
      <h1 className='text-6xl mt-2 mb-12 text-[#484b4bf2] text-center underline'>Payments</h1>

        {loading && <Loading />}
        {!loading && <Table columns={columns} data={data} />}
    </div>
  )
}

export default Payments;