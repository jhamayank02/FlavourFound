import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../ui/Modal';
import authContext from '../../ctx/authContext';

function Navigation({hideNavigationHandler, showMyOrders, showLogin}) {

    const authCtx = useContext(authContext);

  return (
    <Modal hideModal={hideNavigationHandler}>
        <div className="logo flex-1 text-2xl text-[#f05941] font-bold tracking-[0.3rem] mb-10">FlavourFound</div>
        <div className='flex flex-col gap-y-3'>
            {authCtx.isAdmin && <Link className='text-lg border-b-[1px] border-[#cfcfcf82] w-[100%] text-center text-[#000000b8] hover:scale-105' to="/admin">Admin Panel</Link>}
            <Link className='text-lg border-b-[1px] border-[#cfcfcf82] w-[100%] text-center text-[#000000b8] hover:scale-105' to="/">Home</Link>
            {authCtx.authenticated && <div onClick={showMyOrders} className='cursor-pointer text-lg border-b-[1px] border-[#cfcfcf82] w-[100%] text-center text-[#000000b8] hover:scale-105'>My Orders</div>}
            <Link className='text-lg border-b-[1px] border-[#cfcfcf82] w-[100%] text-center text-[#000000b8] hover:scale-105' to="/search">Search</Link>
            {!authCtx.authenticated && <div onClick={showLogin} className='cursor-pointer text-lg border-b-[1px] border-[#cfcfcf82] w-[100%] text-center text-[#000000b8] hover:scale-105'>Login</div>}
            {authCtx.authenticated && <div onClick={authCtx.logoutHandler} className='cursor-pointer text-lg border-b-[1px] border-[#cfcfcf82] w-[100%] text-center text-[#000000b8] hover:scale-105'>Logout</div>}
            <button onClick={hideNavigationHandler} className="py-1 px-5 mr-3  border-[1px] border-[#e9e9e980] bg-[#e9e9e980] text-[#555555] rounded-2xl hover:bg-[#F05941] hover:text-white hover:border-[#F05941]">Close</button>
        </div>
    </Modal>
  )
}

export default Navigation;
