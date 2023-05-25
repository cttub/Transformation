import React from 'react';
import { Outlet } from "react-router-dom";
const Navigation = () => {
  return(
    <div id='nav'>
      <Outlet />
    </div>
  );
};

export default Navigation;