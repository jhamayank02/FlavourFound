import { NavLink } from 'react-router-dom';
import BannerImg from '../../assets/images/banner_img.jpg';

const Banner = ()=>{
    return <div className="banner bg-[#8282820f] mx-5 flex flex-col mb-5">
        <div className="left-section px-4 py-5 flex justify-center items-center flex-1 order-2 justify-start">
            <div className="flex flex-col">

            
            <div className="font-medium text-[#F05941] text-7xl">Here we are to serve you</div>
            <div className="mt-3 text-4xl font-extralight">
            Indulge your senses and embark on a delectable journey with FlavorHub, your ultimate destination for a delightful food ordering experience! We are thrilled to welcome you to a world where taste meets technology, and every craving finds its perfect match.
            </div>

            <div className="mt-10 mb-8">
                <NavLink to={'/all'} className="py-3 px-10 mr-3  border-[1px] border-[#e9e9e980] bg-[#e9e9e980] text-[#555555] rounded-2xl hover:bg-[#F05941] hover:text-white hover:border-[#F05941] text-4xl">Explore</NavLink>
                <NavLink to={'/all'} className="bg-[#F05941] py-3 px-10 text-white border-[1px] border-[#F05941] rounded-3xl hover:border-[#e9e9e980] hover:bg-[#e9e9e980] hover:text-[#555555] text-4xl">Order now</NavLink>
            </div>
            
            
            </div>
        </div>

        <div className="right-section order-1">
            <img src={BannerImg} className="object-cover rounded-l-lg h-[500px] w-[100%] rounded-none" alt="Banner Image"></img>
        </div>
    </div>
}

export default Banner;