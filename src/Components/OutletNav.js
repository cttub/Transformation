import React from 'react';
import { Outlet } from "react-router-dom";
import NavigationBar from './NavigationBar';
const OutletNav = () => {
  return(
    <div id='nav'>
      <NavigationBar/>
      <Outlet />
    </div>
  );
};

export default OutletNav;