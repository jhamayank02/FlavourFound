import React, { useEffect, useState, useContext } from 'react'
import Table from '../../../utils/Table';
import Loading from '../Loading';
import notificationContext from '../../../ctx/notificationContext';
import authContext from '../../../ctx/authContext';

const columns = [
  {
      "Header": "User id",
      "accessor": "user_id"
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
      "Header": "Contact no.",
      "accessor": "contact_no"
  },
  {
      "Header": "Admin rights",
      "accessor": "admin_rights"
  }
]

function Admins(props) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const notificationCtx = useContext(notificationContext);
  const authCtx = useContext(authContext);

  const {url, fetchData, showEditUserModal} = props;

  const fetchUserDetails = (user_id)=>{

    fetchData(url+'user-details', "POST", {"customer_id": user_id, user_id: authCtx.authenticated ? authCtx.id : undefined})
      .then(res=>{
        showEditUserModal(res.customer_details);
      })
      .catch(err=>{
        notificationCtx.showNotification(true, err.message)
      })
  }

  useEffect(()=>{

    setLoading(true);

    fetchData(url+'admins', "POST", {user_id: authCtx.authenticated ? authCtx.id : undefined})
      .then(res=>{
        if(res.status === 200){
          const result = [];

          res.allAdmins.map((item)=>{
            result.push({
              customer_name: item.name,
              customer_email: item.email,
              contact_no: item.contact_no,
              admin_rights: item.admin_rights ? "Yes" : "No",
              user_id: item._id,
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
        <h1 className='text-6xl mt-2 mb-12 text-[#484b4bf2] text-center underline sm:text-5xl lg:text-4xl xl:text-3xl xl:mb-6'>Users With Admin Rights</h1>

        {loading && <Loading />}
        {!loading && <Table fetchDetails={fetchUserDetails} columns={columns} data={data} />}
    </div>
  )
}

export default Admins