import React from 'react';
import { Outlet } from "react-router-dom";
import NavigationBar from './NavigationBar';
import BackToTop from './BackToTop';
import Hamburger from './Hamburger';
const OutletNav = () => {
  return(
    <div id='nav'>
      <div className='non-hamburger'><NavigationBar/></div>
      <div className='hamburger'><Hamburger/></div>
      <BackToTop/>
      <Outlet />
    </div>
  );
};

export default OutletNav;