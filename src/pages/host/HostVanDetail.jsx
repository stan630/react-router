import React, { useState, useEffect } from "react";
// useParams allow us to grab parameters in the URL
import { useParams } from "react-router-dom";

const HostVanDetail = () => {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data));
  }, []);

  return <h1>Host Van Detail Page</h1>

};

export default HostVanDetail;
