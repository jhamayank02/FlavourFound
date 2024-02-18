import loader from '../../assets/gifs/loading.gif';

const Loading = ()=>{
    return (
        <div className='h-[100vh] relative'>
            <img className='h-12 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src={loader} alt="Loading"></img>
        </div>
    )
}

export default Loading;