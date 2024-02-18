import {Outlet} from 'react-router-dom';

import AdminNavigation from "./AdminNavigation";

const AdminPanel = ()=>{

    return (

        <div className="admin-container flex relative">
                        <AdminNavigation />
                        <div className="w-[-webkit-fill-available] ml-3">
                            <Outlet></Outlet>
                        </div>
        </div>

    )
}

export default AdminPanel;