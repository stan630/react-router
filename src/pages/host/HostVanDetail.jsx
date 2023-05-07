import React, { useState, useEffect } from "react";
// useParams allow us to grab parameters in the URL
import { useParams,Link } from "react-router-dom";

const HostVanDetail = () => {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then(res => res.json())
      .then(data => setCurrentVan(data.vans));
  }, []);

  if (!currentVan) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
        <Link
            to=".."
            className="back-button">
            &larr; <span>Back to all vans</span>
        </Link>
        <img src={currentVan.imageUrl} width={150} />
        <h2>{currentVan.name}</h2>
        <p>${currentVan.price}/day</p>
        <p>{currentVan.type}</p>
    </div>
  )

};

export default HostVanDetail;
