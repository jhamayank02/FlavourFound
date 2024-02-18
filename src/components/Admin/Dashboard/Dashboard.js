import React, { useContext, useEffect, useState } from 'react';
import authContext from '../../../ctx/authContext';
import notificationContext from '../../../ctx/notificationContext';
import DashboardCard from '../../../ui/DashboardCard';
// import LineChart from '../../../utils/LineChart';
// import PieChart from '../../../utils/PieChart';

function Dashboard(props) {
  const {fetchData} = props;
  const authCtx = useContext(authContext);
  const notificationCtx = useContext(notificationContext);
  const [dashboardData, setDashboardData] = useState({});

  useEffect(()=>{
    const url = "https://flavourfound.onrender.com/admin/business-summary";
    fetchData(url, "POST", {user_id: authCtx.authenticated ? authCtx.id : undefined})
    .then(resData=>{
      if(resData.status === 200){
        setDashboardData(resData.summary)
      }
      else{
        throw Error(resData.msg);
      }
    })
    .catch(err=>{
      notificationCtx.showNotification(true, err.message);
    })
  }, []);

  return (
    <div>
      <h1 className='text-3xl mt-2 mb-4 text-[#484b4bf2] text-center underline'>Admin Dashboard</h1>

      <h2 className='text-2xl mt-2 mb-4 text-[#484b4bf2]'>Business Summary</h2>
      <div className='flex flex-wrap gap-x-3'>
        <DashboardCard heading={"Total Registered Users"} value={dashboardData.total_users} iconClass={"bx bxs-user-rectangle"} />
        <DashboardCard heading={"Users With Admin Rights"} value={dashboardData.admin_rights} iconClass={'bx bxs-user-check'} />
        <DashboardCard heading={"Total Orders"} value={dashboardData.total_orders} iconClass={"bx bx-trending-up"} />
        <DashboardCard heading={"Total Sales"} value={dashboardData.total_sales} iconClass={"bx bxs-up-arrow"} />
        <DashboardCard heading={"Sales This Month"} value={dashboardData.sales_this_month} iconClass={'bx bxs-calendar'} />
        <DashboardCard heading={"Total Food Items"} value={dashboardData.food_items_count} iconClass={"bx bxs-bowl-hot"} />
      </div>

      {/* <h2 className='text-2xl mt-2 mb-4 text-[#484b4bf2]'>Sales Analysis</h2>

      <div className='w-[500px] m-auto max-[600px]:w-[90%]'>
        <div className=''><LineChart /></div>
        <div className=''><LineChart /></div>
        <div className=''><PieChart /></div>
      </div> */}

    </div>
  )
}

export default Dashboard;