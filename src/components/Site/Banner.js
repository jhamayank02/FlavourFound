import { NavLink } from 'react-router-dom';
import BannerImg from '../../assets/images/banner_img.jpg';

const Banner = ()=>{
    return <div className="banner bg-[#8282820f] mx-5 flex flex-col mb-5 lg:flex-row">
        <div className="left-section px-4 py-5 flex justify-center items-center flex-1 order-2 justify-start md:pb-2 lg:order-1">
            <div className="flex flex-col">
            <div className="font-medium text-[#F05941] text-7xl sm:text-6xl md:text-5xl lg:text-4xl">Here we are to serve you</div>
            <div className="mt-3 text-4xl font-extralight sm:text-3xl md:text-2xl lg:text-xl">
            Indulge your senses and embark on a delectable journey with FlavorHub, your ultimate destination for a delightful food ordering experience! We are thrilled to welcome you to a world where taste meets technology, and every craving finds its perfect match.
            </div>

            <div className="mt-10 mb-8 md:mt-7 md:mt-5">
                <NavLink to={'/all'} className="py-3 px-10 mr-3  border-[1px] border-[#e9e9e980] bg-[#e9e9e980] text-[#555555] rounded-2xl hover:bg-[#F05941] hover:text-white hover:border-[#F05941] text-4xl sm:py-2 sm:text-3xl md:text-2xl lg:text-xl lg:py-1 lg:px-6 xl:text-base xl:px-7 xl:py-1 xl:rounded-2xl">Explore</NavLink>
                <NavLink to={'/all'} className="bg-[#F05941] py-3 px-10 text-white border-[1px] border-[#F05941] rounded-3xl hover:border-[#e9e9e980] hover:bg-[#e9e9e980] hover:text-[#555555] text-4xl sm:py-2 sm:text-3xl md:text-2xl lg:text-xl lg:py-1 lg:px-6 xl:text-base xl:px-7 xl:py-1 xl:rounded-2xl">Order now</NavLink>
            </div>
            
            
            </div>
        </div>

        <div className="right-section order-1 lg:order-2 lg:w-[50%]">
            <img src={BannerImg} className="object-cover rounded-l-lg h-[500px] w-[100%] rounded-none xl:h-[400px] 2xl:h-[500px]" alt="Banner Image"></img>
        </div>
    </div>
}

export default Banner;