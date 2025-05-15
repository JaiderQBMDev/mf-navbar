import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Navbar } from './sections/Navbar';
import { Sidebar } from './sections/Sidebar';
const Layout = () => {
    const [sidebarToggle, setSidebarToggle] = useState(true);
    const user = useSelector((state) => state.user.userData);
    const permissions = user?.permissions?.map((perm) => perm.name || []);
    console.log("estos es lo que envio",permissions);
    return (
        <>
            <div>
                <Navbar
                    sidebarToggle={sidebarToggle}
                    setSidebarToggle={setSidebarToggle}
                />
                <Sidebar
                    permissions={permissions}
                    sidebarToggle={sidebarToggle}
                />
            </div>
        </>
    );
}

export default Layout