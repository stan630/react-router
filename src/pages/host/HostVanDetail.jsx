import React, { useState, useEffect } from "react";
// useParams allow us to grab parameters in the URL
import { useParams,Link, NavLink, Outlet } from "react-router-dom";

const HostVanDetail = () => {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  }

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then(res => res.json())
      .then(data => setCurrentVan(data.vans));
  }, []);

  if (!currentVan) {
    return <h1>Loading...</h1>
  }

  return (
    <section>
        <Link
            to=".."
            relative="path"
            className="back-button">
            &larr; <span>Back to all vans</span>
        </Link>
        
        <div className="host-van-detail-layout-container">
            <div className="host-van-detail">
                <img src={currentVan.imageUrl} width={150} />
                <div className="host-van-detail-info-text">
                    <i className={`van-type van-type-${currentVan.type}`}>
                    </i>
                    <h3>{currentVan.name}</h3>
                    <h4>${currentVan.price}/day</h4>
                </div>
            </div>

            <nav className="host-van-detail-nav">
                <NavLink
                 to="."
                 end
                 style={({ isActive }) => isActive ? activeStyles : null}
                 >
                    Details
                </NavLink>
                
                <NavLink
                    to="price"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Pricing
                </NavLink>
                
                <NavLink
                 to="photos"
                 style={({ isActive }) => isActive ? activeStyles : null}
                 >
                    Photos
                </NavLink>
            </nav>
            <Outlet />
        </div>
    </section>
  )

};

export default HostVanDetail;
