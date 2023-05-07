import React from "react";
import { Link, Outlet } from "react-router-dom";

const HeaderHost = () => {
  return (
    
      
      <nav>
        <Link to="/host/income">Income</Link>
        <Link to="/host/hostvans">Vans</Link>
        <Link to="/host/reviews">Reviews</Link>
        
      </nav>
    
  );
};

export default HeaderHost;