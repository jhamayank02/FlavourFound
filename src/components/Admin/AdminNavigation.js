import { Link } from "react-router-dom";

const AdminNavigation = ({showNavigation, toggleNavigation})=>{

    return (
        <div className={`fixed left-0 top-[100px] w-[100%] h-[100dvh] ${showNavigation ? 'bg-[#adadadbd] overflow-hidden z-10' : 'z-[-1]'} md:top-[83px] lg:top-[71px] xl:sticky xl:w-[400px] xl:top-0 xl:z-0 xl:bg-white`}>
        {/* <div onClick={toggleNavigation} id="hamburgerBtn" className={`hamburgerBtn ml-6 text-6xl cursor-pointer text-[#f05941] hover:text-[#1c1c1cd9]`}><i className='bx bx-right-arrow-alt '></i></div> */}

        <div className={`nav-section h-[inherit] w-[60%] py-10 px-4 bg-white text-[#1c1c1cd9] border-b-[1px] border-t-[1px] border-r-[1px] border-[#e3e3e3] block absolute top-0 left-0 ${showNavigation ? 'block' : 'hidden'} xl:block xl:w-[100%] xl:py-4`}>

                <div className="flex justify-between">
                    <div className="text-6xl text-[#f05941] font-extralight mt-[-8px] sm:text-5xl lg:text-4xl xl:text-3xl">Admin Panel</div>
                    <div onClick={toggleNavigation} className="text-6xl cursor-pointer text-[#f05941] font-extralight mt-[-8px] hover:text-[#1c1c1cd9 sm:text-5xl lg:text-4xl xl:hidden"><i className='bx bx-left-arrow-alt'></i></div>
                </div>

                <div className="mt-10 xl:mt-3">
                    <ul>
                        <li className="cursor-pointer px-2 text-4xl my-4 border-b-[1px] border-[#d6d0d0] font-light hover:text-[#f05941] pb-2 sm:text-3xl lg:text-2xl lg:pb-1 xl:text-lg xl:pb-0"><i className='bx bxs-dashboard mr-2'></i><span><Link to="/admin">Dashboard</Link></span></li>

                        <li className="cursor-pointer px-2 text-4xl my-4 border-b-[1px] border-[#d6d0d0] font-light pb-2 sm:text-3xl lg:text-2xl lg:pb-1 xl:text-lg xl:pb-0"><i className='bx bxs-user mr-2'></i><span>Users</span></li>

                        <div className="px-8" id="users-dropdown">
                            <li className="cursor-pointer px-2 text-4xl my-4 border-b-[1px] border-[#d6d0d0] font-light hover:text-[#f05941] pb-2 sm:text-3xl lg:text-2xl lg:pb-1 xl:text-lg xl:pb-0"><Link to="admins">Admins</Link></li>
                            <li className="cursor-pointer px-2 text-4xl my-4 border-b-[1px] border-[#d6d0d0] font-light hover:text-[#f05941] pb-2 sm:text-3xl lg:text-2xl lg:pb-1 xl:text-lg xl:pb-0"><Link to="all-users">Users</Link></li>
                        </div>

                        <li className="cursor-pointer px-2 text-4xl my-4 border-b-[1px] border-[#d6d0d0] font-light pb-2 sm:text-3xl lg:text-2xl lg:pb-1 xl:text-lg xl:pb-0"><i className='bx bxs-cart mr-2'></i><span>Orders</span></li>

                        <div className="px-8" id="order-dropdown">
                            <li className="cursor-pointer px-2 text-4xl my-4 border-b-[1px] border-[#d6d0d0] font-light hover:text-[#f05941] pb-2 sm:text-3xl lg:text-2xl lg:pb-1 xl:text-lg xl:pb-0"><Link to="all-orders">All orders</Link></li>
                            <li className="cursor-pointer px-2 text-4xl my-4 border-b-[1px] border-[#d6d0d0] font-light hover:text-[#f05941] pb-2 sm:text-3xl lg:text-2xl lg:pb-1 xl:text-lg xl:pb-0"><Link to="pending-orders">Pending orders</Link></li>
                            <li className="cursor-pointer px-2 text-4xl my-4 border-b-[1px] border-[#d6d0d0] font-light hover:text-[#f05941] pb-2 sm:text-3xl lg:text-2xl lg:pb-1 xl:text-lg xl:pb-0"><Link to="completed-orders">Completed orders</Link></li>
                        </div>

                        <li className="cursor-pointer px-2 text-4xl my-4 border-b-[1px] border-[#d6d0d0] font-light pb-2 lg:text-2xl lg:pb-1 xl:text-lg xl:pb-0"><i className='bx bxs-bowl-hot mr-2 sm:text-3xl'></i><span>Foods</span></li>

                        <div className="px-8" id="food-dropdown">
                            <li className="cursor-pointer px-2 text-4xl my-4 border-b-[1px] border-[#d6d0d0] font-light hover:text-[#f05941] pb-2 sm:text-3xl lg:text-2xl lg:pb-1 xl:text-lg xl:pb-0"><Link to="all-foods">All Foods</Link></li>
                            <li className="cursor-pointer px-2 text-4xl my-4 border-b-[1px] border-[#d6d0d0] font-light hover:text-[#f05941] pb-2 sm:text-3xl lg:text-2xl lg:pb-1 xl:text-lg xl:pb-0"><Link to="add-food">Add</Link></li>
                        </div>

                        <li className="cursor-pointer px-2 text-4xl my-4 border-b-[1px] border-[#d6d0d0] font-light hover:text-[#f05941] pb-2 sm:text-3xl lg:text-2xl lg:pb-1 xl:text-lg xl:pb-0"><i className='bx bxs-wallet mr-2'></i><span><Link to="payments">Payments</Link></span></li>
                    </ul>
                </div>

            </div>
            </div>
    )
}

export default AdminNavigation;