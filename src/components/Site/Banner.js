import { NavLink } from 'react-router-dom';
import BannerImg from '../../assets/images/banner_img.jpg';

const Banner = ()=>{
    return <div className="banner bg-[#8282820f] mx-5 flex max-[1200px]:flex-col">
        <div className="left-section p-2 flex justify-center items-center flex-1 max-[1200px]:order-2 max-[1200px]:justify-start">
            <div className="max-w-[630px] flex flex-col">

            
            <div className="text-5xl font-medium text-[#F05941] max-[1200px]:text-3xl">Here we are to serve you</div>
            <div className="mt-3">
            Indulge your senses and embark on a delectable journey with FlavorHub, your ultimate destination for a delightful food ordering experience! We are thrilled to welcome you to a world where taste meets technology, and every craving finds its perfect match.
            </div>

            <div className="mt-5">
                <NavLink to={'/all'} className="py-1 px-10 mr-3  border-[1px] border-[#e9e9e980] bg-[#e9e9e980] text-[#555555] rounded-2xl hover:bg-[#F05941] hover:text-white hover:border-[#F05941]">Explore</NavLink>
                <NavLink to={'/all'} className="bg-[#F05941] py-1 px-10 text-white border-[1px] border-[#F05941] rounded-2xl hover:border-[#e9e9e980] hover:bg-[#e9e9e980] hover:text-[#555555]">Order now</NavLink>
            </div>
            
            
            </div>
        </div>

        <div className="right-section max-[1200px]:order-1">
            <img src={BannerImg} className="h-[500px] w-[670px] object-cover rounded-l-lg max-[600px]:h-[200px] max-[1200px]:h-[400px] max-[1200px]:w-[100%] max-[1200px]:rounded-none min-[1550px]:w-[800px] min-[2100px]:w-[1100px]" alt="Banner Image"></img>
        </div>
    </div>
}

export default Banner;