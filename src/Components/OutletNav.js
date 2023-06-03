import React from 'react';
import { Outlet } from "react-router-dom";
import NavigationBar from './NavigationBar';
import BackToTop from './BackToTop';

const OutletNav = () => {
  return(
    <div id='nav'>
      <NavigationBar/>
      <BackToTop/>
      <Outlet />
    </div>
  );
};

export default OutletNav;