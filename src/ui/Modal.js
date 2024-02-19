import ReactDOM from 'react-dom';

const Backdrop = (props)=>{
    return <div onClick={props.hideModal} className="z-20 h-[-webkit-fill-available] w-[100%] fixed opacity-50 bg-[#8a8a8a]">
    </div>
}

const ModalOverlay = (props)=>{
    return <div className="z-30 bg-white px-5 py-10 rounded-md fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90%] max-h-[1400px]">
        {props.children}
    </div>
}


const Modal = (props)=>{
    const portalElement = document.getElementById('overlays');
    return (
        <>
            {ReactDOM.createPortal(<Backdrop hideModal={props.hideModal} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
        
    )
}

export default Modal;