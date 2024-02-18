import { useState } from "react";
import { Link } from "react-router-dom";

const AdminNavigation = (props)=>{

    const [showNavigation, setShowNavigation] = useState(true);

    const toggleNavigation = ()=>{
        setShowNavigation(prevState => !prevState);
    }

    return (
        <div className="sticky left-0 top-[64px] h-[fit-content]">
        <div onClick={toggleNavigation} id="hamburgerBtn" className={`hamburgerBtn ml-4 mb-2 text-xl cursor-pointer text-[#f05941] hover:text-[#1c1c1cd9] hidden max-[600px]:px-2 max-[600px]:py-[1px] ${!showNavigation ? 'max-[600px]:block' : 'max-[600px]:hidden'}`}><i className='bx bx-right-arrow-alt'></i></div>

        <div className={`nav-section w-[max-content] py-3 px-4 bg-white text-[#1c1c1cd9] border-b-[1px] border-t-[1px] border-r-[1px] border-[#e3e3e3] block max-[600px]:absolute max-[600px]:top-0 max-[600px]:left-0 ${showNavigation ? 'max-[600px]:block' : 'max-[600px]:hidden'}`}>

                <div className="flex justify-between">
                    <div className="text-[18px] text-[#f05941] font-extralight mt-[-8px]">Admin Panel</div>
                    <div onClick={toggleNavigation} className="cursor-pointer text-[18px] text-[#f05941] font-extralight mt-[-8px] hover:text-[#1c1c1cd9 hidden max-[600px]:block"><i className='bx bx-left-arrow-alt'></i></div>
                </div>

                <div className="mt-5">
                    <ul>
                        <li className="cursor-pointer px-2 text-[18px] my-2 border-b-[1px] border-[#d6d0d0] font-light hover:text-[#f05941]"><i className='bx bxs-dashboard mr-2'></i><span><Link to="/admin">Dashboard</Link></span></li>

                        <li className="cursor-pointer px-2 text-[18px] my-2 border-b-[1px] border-[#d6d0d0] font-light"><i className='bx bxs-user mr-2'></i><span>Users</span></li>

                        <div className="px-8" id="users-dropdown">
                            <li className="cursor-pointer px-2 text-[16px] my-2 border-b-[1px] border-[#d6d0d0] font-light hover:text-[#f05941]"><Link to="admins">Admins</Link></li>
                            <li className="cursor-pointer px-2 text-[16px] my-2 border-b-[1px] border-[#d6d0d0] font-light hover:text-[#f05941]"><Link to="all-users">Users</Link></li>
                        </div>

                        <li className="cursor-pointer px-2 text-[18px] my-2 border-b-[1px] border-[#d6d0d0] font-light"><i className='bx bxs-cart mr-2'></i><span>Orders</span></li>

                        <div className="px-8" id="order-dropdown">
                            <li className="cursor-pointer px-2 text-[16px] my-2 border-b-[1px] border-[#d6d0d0] font-light hover:text-[#f05941]"><Link to="all-orders">All orders</Link></li>
                            <li className="cursor-pointer px-2 text-[16px] my-2 border-b-[1px] border-[#d6d0d0] font-light hover:text-[#f05941]"><Link to="pending-orders">Pending orders</Link></li>
                            <li className="cursor-pointer px-2 text-[16px] my-2 border-b-[1px] border-[#d6d0d0] font-light hover:text-[#f05941]"><Link to="completed-orders">Completed orders</Link></li>
                        </div>

                        <li className="cursor-pointer px-2 text-[18px] my-2 border-b-[1px] border-[#d6d0d0] font-light"><i className='bx bxs-bowl-hot mr-2'></i><span>Foods</span></li>

                        <div className="px-8" id="food-dropdown">
                            <li className="cursor-pointer px-2 text-[16px] my-2 border-b-[1px] border-[#d6d0d0] font-light hover:text-[#f05941]"><Link to="all-foods">All Foods</Link></li>
                            <li className="cursor-pointer px-2 text-[16px] my-2 border-b-[1px] border-[#d6d0d0] font-light hover:text-[#f05941]"><Link to="add-food">Add</Link></li>
                        </div>

                        <li className="cursor-pointer px-2 text-[18px] my-2 border-b-[1px] border-[#d6d0d0] font-light hover:text-[#f05941]"><i className='bx bxs-wallet mr-2'></i><span><Link to="payments">Payments</Link></span></li>
                    </ul>
                </div>

            </div>
            </div>
    )
}

export default AdminNavigation;