import { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import notificationContext from '../ctx/notificationContext';

const MessageContent = (props)=>{
    return <div className={`${props.error ? 'bg-[#e34646]' : 'bg-[#62af1d]'} flex justify-between z-20 rounded-md text-white text-4xl px-5 py-3 fixed w-[60%] top-7 left-[50%] translate-x-[-50%] w-[90%]`}>
        {props.children}
        <span onClick={props.onClick} className='cursor-pointer hover:text-[#d1d0ce]'>x</span>
    </div>
}
    
const Message = ()=>{
    const portalElement = document.getElementById('messages');
    
    const notificationCtx = useContext(notificationContext);

    useEffect(()=>{
        setTimeout(()=>{
            notificationCtx.hideNotification();
        }, 5000);
    }, [notificationCtx.isVisible]);
    
    return <>
        {notificationCtx.isVisible && <div>{ReactDOM.createPortal(<MessageContent onClick={notificationCtx.hideNotification} error={notificationCtx.error}>{notificationCtx.msg}</MessageContent>, portalElement)}</div>}
    </>
}

export default Message;