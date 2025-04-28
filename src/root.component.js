import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
const Layout = () => {

  const [sidebarToggle, setSidebarToggle] = useState(true);
  return (
    <div className='flex'>
      <Navbar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      <Sidebar
        sidebarToggle={sidebarToggle}
      />
    </div>
  );
};

export default Layout;