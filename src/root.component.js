import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
const Layout = () => {
  // const [userName, setUserName] = useState('');

  // useEffect(() => {
  //   const handleStorageChange = () => {
  //     const user = localStorage.getItem('user');
  //     if (user) {
  //       setUserName(JSON.parse(user).name);
  //     } else {
  //       setUserName('');
  //     }
  //   };

  //   handleStorageChange();
  //   window.addEventListener('storage', handleStorageChange);
  //   return () => {
  //     window.removeEventListener('storage', handleStorageChange);
  //   };
  // }, []);

  return (
    <div className='flex'>
     <Navbar />
     <Sidebar />
    </div>
  );
};

export default Layout;