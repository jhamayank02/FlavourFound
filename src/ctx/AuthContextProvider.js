import { useContext, useReducer } from 'react';
import authContext from './authContext';
import notificationContext from './notificationContext';

const default_auth_state = {
    email: '',
    authenticated: false,
    id: '',
    isAdmin: false,
    loginHandler: (data)=>{},
    logoutHandler: ()=>{},
    signupHandler: (data)=>{}
}

const authReducer = (state, action)=>{
    if(action.type === 'LOGIN'){
        return {
            ...state,
            errorMsg: '',
            authenticated: action.authenticated,
            email: action.email,
            isAdmin: action.isAdmin,
            id: action.id,
        }
    }
    else if(action.type === 'LOGOUT'){
        return {
            ...state,
            errorMsg: '',
            username: '',
            authenticated: false,
            id: '',
            isAdmin: false,
        }
    }
    else if(action.type === 'SIGNUP'){
        return {
            ...state,
            errorMsg: '',   
            authenticated: action.authenticated,
            email: action.email,
            isAdmin: action.isAdmin,
            id: action.id,
        }
    }
    else{
        return {
            ...state
        }
    }
}

const AuthContextProvider = (props)=>{

    const [authState, dispatchAuthAction] = useReducer(authReducer, default_auth_state);

    const notificationCtx = useContext(notificationContext);

    const loginHandler = (data)=>{
        const url = "https://flavourfound.onrender.com/auth/login";

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(resData=>{
            if(resData.status === 200){
                notificationCtx.showNotification(false, "Logged in successfully.")
                return dispatchAuthAction({
                    type: "LOGIN",
                    authenticated: resData.authenticated,
                    email: resData.email,
                    isAdmin: resData.isAdmin,
                    id: resData.id,
                })
            }
            else{
                throw Error(resData.msg);
            }
        })
        .catch(err=>{
            notificationCtx.showNotification(true, err.message)
        })
    }

    const logoutHandler = ()=>{
        const url = "https://flavourfound.onrender.com/auth/logout";

        if(authState.authenticated === true){
            fetch(url)
                .then(response=>response.json())
                .then(resData=> { 
                    if(resData.status === 200)   {
                        notificationCtx.showNotification(false, "Logged out successfully.")
                        return dispatchAuthAction({type: "LOGOUT"})
                    }
                    else{
                        throw Error(resData.msg);
                    }
                }).catch(err=>{
                    notificationCtx.showNotification(true, err.message)
                })
        }
    }

    const signupHandler = (data)=>{
        
        const url = "https://flavourfound.onrender.com/auth/register";

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(resData=>{ 
            if(resData.status === 200){
                notificationCtx.showNotification(false, "Registered successfully.");
                return dispatchAuthAction({
                    type: "SIGNUP",
                    authenticated: resData.authenticated,
                    email: resData.email,
                    isAdmin: resData.isAdmin,
                    id: resData.id,
                })
            }
            else{
                throw Error(resData.msg);
            }
        })
        .catch(err=>{
            notificationCtx.showNotification(true, err.message);
        })
    }

    return <authContext.Provider value={{
        ...authState,
        loginHandler: loginHandler,
        logoutHandler: logoutHandler,
        signupHandler: signupHandler
    }}>
        {props.children}
    </authContext.Provider>
}

export default AuthContextProvider;