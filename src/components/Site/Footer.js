import { Link } from "react-router-dom";

const Footer = ()=>{
    return <footer className="border-t-[1px] border-[#f05941] my-3 mx-4 py-4">

        <div className="flex justify-around max-[600px]:flex-wrap max-[600px]:gap-y-3">
            <div className="max-w-[300px] max-[600px]:max-w-[90%]">
                <div className="logo flex-1 text-2xl text-[#f05941] font-bold tracking-[0.3rem]">FlavorFound</div>
                <div className="text-[#484848d1] mt-1">Indulge your senses and embark on a delectable journey with FlavorHub, your ultimate destination for a delightful food ordering experience!</div>
                <div className="social-handles mt-2">
                    <i className='bx bxl-facebook-circle text-[#f05941] text-4xl mr-2'></i>
                    <i className='bx bxl-instagram text-[#f05941] text-4xl mr-2'></i>
                    <i className='bx bxl-twitter text-[#f05941] text-4xl mr-2'></i>
                </div>
            </div>

            <div className="max-[600px]:w-[90%]">
                <span className="text-[18px] text-[#f05941] font-medium">Useful links</span>
                <ul className="gap-x-4 flex">
                <Link to="/" className="text-[#484848d1] cursor-pointer hover:scale-110 hover:text-[#f05941]">Home</Link>
                <Link to="/search" className="text-[#484848d1] cursor-pointer hover:scale-110 hover:text-[#f05941]">Search</Link>
                <Link to="/all" className="text-[#484848d1] cursor-pointer hover:scale-110 hover:text-[#f05941]">Foods</Link>
            </ul>
            </div>
        </div>
            <div className="text-sm mt-1 text-[#484848d1] font-medium text-center mt-4">Copyright © 2024 | All Rights Reserved</div>
        
    </footer>
}

export default Footer;