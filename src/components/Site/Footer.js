import { Link } from "react-router-dom";

const Footer = ()=>{
    return <footer className="border-t-[1px] border-[#f05941] my-3 mx-4 py-4">

        <div className="flex justify-between">
            <div className="max-w-[500px]">
                <div className="logo flex-1 text-5xl text-[#f05941] font-bold tracking-[0.3rem]sm:text-4xl lg:text-3xl xl:text-2xl">FlavourFound</div>
                <div className="text-[#484848d1] mt-1 text-2xl sm:text-xl xl:text-lg">Indulge your senses and embark on a delectable journey with FlavorHub, your ultimate destination for a delightful food ordering experience!</div>
                <div className="social-handles mt-5 xl:mt-2">
                    <i className='bx bxl-facebook-circle text-[#f05941] text-6xl mr-2 sm:text-5xl lg:text-4xl xl:text-3xl'></i>
                    <i className='bx bxl-instagram text-[#f05941] text-6xl mr-2 sm:text-5xl lg:text-4xl xl:text-3xl'></i>
                    <i className='bx bxl-twitter text-[#f05941] text-6xl mr-2 sm:text-5xl lg:text-4xl xl:text-3xl'></i>
                </div>
            </div>

            <div className="mt-2">
                <span className="text-3xl text-[#f05941] font-medium lg:text-2xl xl:text-xl">Useful links</span>
                <ul className="gap-x-7 flex">
                <Link to="/" className="text-[#484848d1] cursor-pointer hover:scale-110 hover:text-[#f05941] text-2xl lg:text-xl xl:text-lg">Home</Link>
                <Link to="/search" className="text-[#484848d1] cursor-pointer hover:scale-110 hover:text-[#f05941] text-2xl lg:text-xl xl:text-lg">Search</Link>
                <Link to="/all" className="text-[#484848d1] cursor-pointer hover:scale-110 hover:text-[#f05941] text-2xl lg:text-xl xl:text-lg">Foods</Link>
            </ul>
            </div>
        </div>
            <div className="text-3xl mt-1 text-[#484848d1] font-medium text-center mt-4 sm:text-2xl lg:text-xl xl:text-lg">Copyright © 2024 | All Rights Reserved</div>
        
    </footer>
}

export default Footer;