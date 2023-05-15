import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Vans = () => {
  let [SearchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = useState([]);

  const typeFilter = SearchParams.get("type");

  function handleFilterChange(key,value) {
    setSearchParams(prevParams => {
        if (value == null) {
            prevParams.delete(key)
        } else {
            prevParams.set(key,value)
        }
        return prevParams
    })
  }

  useEffect(() => {
    fetch("api/vans/")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans;

  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} style={{ width: 200 }} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button onClick={() => handleFilterChange("type","simple")}
        className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}>
          Simple
        </button>
        <button onClick={() => setSearchParams({type:"luxury"})} className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}>
          Luxury
        </button>
        <button onClick={() => setSearchParams({type: "rugged"})} className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}>
          Rugged
        </button>
        {typeFilter ? (
            <button 
                onClick={() => setSearchParams({})}
                className="van-type clear-filters">
            Back
            </button>
            ) : null
        }
        
      
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default Vans;
