import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../ui/Modal';
import authContext from '../../ctx/authContext';

function Navigation({hideNavigationHandler, showMyOrders, showLogin}) {

    const authCtx = useContext(authContext);

  return (
    <Modal hideModal={hideNavigationHandler}>
        <div className="logo flex-1 text-5xl text-[#f05941] font-bold tracking-[0.3rem] mb-10">FlavourFound</div>
        <div className='flex flex-col gap-y-3'>
            {authCtx.isAdmin && <Link className='py-2 text-4xl border-b-[1px] border-[#cfcfcf82] w-[100%] text-center text-[#000000b8] hover:scale-105' to="/admin">Admin Panel</Link>}
            <Link className='py-2 text-4xl border-b-[1px] border-[#cfcfcf82] w-[100%] text-center text-[#000000b8] hover:scale-105' to="/">Home</Link>
            {authCtx.authenticated && <div onClick={showMyOrders} className='py-2 cursor-pointer text-4xl border-b-[1px] border-[#cfcfcf82] w-[100%] text-center text-[#000000b8] hover:scale-105'>My Orders</div>}
            <Link className='py-2 text-4xl border-b-[1px] border-[#cfcfcf82] w-[100%] text-center text-[#000000b8] hover:scale-105' to="/search">Search</Link>
            {!authCtx.authenticated && <div onClick={showLogin} className='py-2 cursor-pointer text-4xl border-b-[1px] border-[#cfcfcf82] w-[100%] text-center text-[#000000b8] hover:scale-105'>Login</div>}
            {authCtx.authenticated && <div onClick={authCtx.logoutHandler} className='cursor-pointer text-4xl border-b-[1px] border-[#cfcfcf82] w-[100%] text-center text-[#000000b8] hover:scale-105'>Logout</div>}
            <button onClick={hideNavigationHandler} className="py-3 px-5 mr-3 mt-4 border-[1px] border-[#e9e9e980] bg-[#e9e9e980] text-[#555555] rounded-2xl text-4xl hover:bg-[#F05941] hover:text-white hover:border-[#F05941]">Close</button>
        </div>
    </Modal>
  )
}

export default Navigation;
