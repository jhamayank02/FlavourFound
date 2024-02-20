import {Outlet} from 'react-router-dom';
import { useState } from 'react';
import AdminNavigation from "./AdminNavigation";

const AdminPanel = ()=>{

    const [showNavigation, setShowNavigation] = useState(false);

    const toggleNavigation = ()=>{
        setShowNavigation(prevState => !prevState);
    }

    return (

        <div className="flex-1 admin-container flex relative">
                        <AdminNavigation showNavigation={showNavigation} toggleNavigation={toggleNavigation} />
                        <div className="w-[-webkit-fill-available] ml-3 px-2">
                            <div onClick={toggleNavigation} id="hamburgerBtn" className={`hamburgerBtn ml-6 text-6xl cursor-pointer text-[#f05941] hover:text-[#1c1c1cd9] sm:text-5xl md:ml-2 lg:text-4xl lg:ml-1 xl:hidden`}><i className='bx bx-right-arrow-alt'></i></div>
                            <Outlet></Outlet>
                        </div>
        </div>

    )
}

export default AdminPanel;