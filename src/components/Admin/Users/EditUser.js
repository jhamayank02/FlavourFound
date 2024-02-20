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
          <h1 className='text-6xl mt-2 mb-12 text-[#484b4bf2] text-center underline sm:text-5xl lg:text-4xl lg:mb-8 xl:text-2xl xl:mb-4'>Edit user</h1>

          <form onSubmit={formSubmitHandler} className='w-[90%] mx-auto'>

            <label className='text-3xl text-[#515454] sm:text-2xl lg:text-xl xl:text-base'>User id</label>
            <input disabled ref={userIdRef} type="text" required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-4 text-4xl py-4 px-3 rounded-md w-[100%] bg-[#c1c0bf99] cursor-not-allowed sm:text-3xl sm:py-3 sm:mb-3 md:text-2xl md:mb-2 md:py-2 lg:text-2xl lg:py-1 xl:text-base xl:py-1"></input>

            <label className='text-3xl text-[#515454] sm:text-2xl lg:text-xl xl:text-base'>Admin rights (true/false)</label>
            <input ref={adminRightsRef} type="text" required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-4 text-4xl py-4 px-3 rounded-md w-[100%] sm:text-3xl sm:py-3 sm:mb-3 md:text-2xl md:mb-2 md:py-2 lg:text-2xl lg:py-1 xl:text-base xl:py-1"></input>

            <label className='text-3xl text-[#515454] sm:text-2xl lg:text-xl xl:text-base'>Contact no.</label>
            <input ref={contactNoRef} type="text" required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] mb-4 text-4xl py-4 px-3 rounded-md w-[100%] sm:text-3xl sm:py-3 sm:mb-3 md:text-2xl md:mb-2 md:py-2 lg:text-2xl lg:py-1 xl:text-base xl:py-1"></input>

            <div className='flex justify-end mt-2'>
              <button onClick={hideEditUserModal} className="mt-2 mr-2 text-4xl py-4 px-10 border-[1px] border-[#515454] rounded-3xl hover:bg-[#484b4bf2] hover:text-white sm:text-3xl sm:py-3 md:text-2xl md:py-2 md:px-6 lg:text-xl lg:py-1 lg:px-4 xl:text-base xl:py-1">Close</button>
              <button className="mt-2 mr-2 text-4xl py-4 px-10  border-[1px] border-[#515454] rounded-3xl hover:bg-[#484b4bf2] hover:text-white sm:text-3xl sm:py-3 md:text-2xl md:py-2 md:px-6 lg:text-xl lg:py-1 lg:px-4 xl:text-base xl:py-1">Update</button>
            </div>

          </form>
      </Modal>
    </>
    
  )
}

export default EditUser;