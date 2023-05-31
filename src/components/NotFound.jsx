import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Page not found</h2>
      <Link to="/">
         Return <span style={{fontWeight:'bold'}}>Home</span>
      </Link>
    </div>
  );
};

export default NotFound;
