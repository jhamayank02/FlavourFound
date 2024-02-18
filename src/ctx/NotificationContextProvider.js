import { useReducer } from 'react';
import notificationContext from './notificationContext';

const default_notification_state = {
    error: false,
    msg: '',
    isVisible: false,
    showNotification : ()=>{},
    hideNotification : ()=>{}
}

const notificationReducer = (state, action)=>{
    if(action.type === 'SHOW'){
        return {
            ...state,
            isVisible: true,
            msg: action.msg,
            error: action.error
        }
    }
    else if(action.type === 'HIDE'){
        return {
            ...state,
            isVisible: false,
            msg: '',
            error: false
        }
    }
    else{
        return {
            ...state
        }
    }
}

const NotificationContextProvider = (props)=>{

    const [notificationState, dispatchNotification] = useReducer(notificationReducer, default_notification_state);

    const showNotification = (error, msg)=>{
        return dispatchNotification({type: "SHOW", msg: msg, error: error});
    }

    const hideNotification = ()=>{
        return dispatchNotification({type: "HIDE"});
    }

    return <notificationContext.Provider value={{
        ...notificationState,
        showNotification: showNotification,
        hideNotification: hideNotification
    }}>
        {props.children}
        </notificationContext.Provider>
}

export default NotificationContextProvider;