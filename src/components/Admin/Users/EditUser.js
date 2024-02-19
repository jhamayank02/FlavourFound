import React, { useEffect, useRef, useContext } from 'react';
import Modal from '../../../ui/Modal';
import notificationContext from '../../../ctx/notificationContext';
import authContext from '../../../ctx/authContext';

function EditUser(props) {

    const {hideEditUserModal, userDetails, url, fetchData} = props;

    const userIdRef = useRef();
    const contactNoRef = useRef();
    const adminRightsRef = useRef();
    const notificationCtx = useContext(notificationContext);
    const authCtx = useContext(authContext);

    const formSubmitHandler = (e)=>{
      e.preventDefault();

      fetchData(url+'update-user', "POST", {
        customer_id: userIdRef.current.value,
        contact_no: contactNoRef.current.value,
        admin_rights: adminRightsRef.current.value,
        user_id: authCtx.authenticated ? authCtx.id : undefined
      }).then(response=> {
        if(response.status === 200){
          notificationCtx.showNotification(false, response.msg);
          hideEditUserModal();
        }
        else{
          throw Error(response.msg)
        }
      }).catch(err=>{
        notificationCtx.showNotification(true, err.message)
      })
    }

    useEffect(()=>{
      userIdRef.current.value = userDetails._id;
      contactNoRef.current.value = userDetails.contact_no;
      adminRightsRef.current.value = userDetails.admin_rights;
    })

  return (
    <>
      <Modal hideModal={hideEditUserModal}>
          <h1 className='text-6xl mt-2 mb-12 text-[#484b4bf2] text-center underline'>Edit user</h1>

          <form onSubmit={formSubmitHandler} className='w-[90%] mx-auto'>

            <label className='text-3xl text-[#515454]'>User id</label>
            <input disabled ref={userIdRef} type="text" required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-4 text-4xl py-4 px-3 rounded-md w-[100%] bg-[#c1c0bf99] cursor-not-allowed"></input>

            <label className='text-3xl text-[#515454]'>Admin rights (true/false)</label>
            <input ref={adminRightsRef} type="text" required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-4 text-4xl py-4 px-3 rounded-md w-[100%]"></input>

            <label className='text-3xl text-[#515454]'>Contact no.</label>
            <input ref={contactNoRef} type="text" required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-4 text-4xl py-4 px-3 rounded-md w-[100%]"></input>

            <div className='flex justify-end mt-2'>
              <button onClick={hideEditUserModal} className="mt-2 mr-2 text-4xl py-4 px-10 border-[1px] border-[#515454] rounded-3xl hover:bg-[#484b4bf2] hover:text-white">Close</button>
              <button className="mt-2 mr-2 text-4xl py-4 px-10  border-[1px] border-[#515454] rounded-3xl hover:bg-[#484b4bf2] hover:text-white">Update</button>
            </div>

          </form>
      </Modal>
    </>
    
  )
}

export default EditUser;