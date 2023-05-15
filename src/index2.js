import React from "react";
import { ReactDOM } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useSearchParams,
} from "react-router-dom";

const swCharacters = [
  { name: "Stanley", type: "sexy" },
  { name: "Smedley", type: "nerd" },
  { name: "Harriet", type: "sexy" },
  { name: "Johnson", type: "nerd" },
];

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  typeFilter = searchParams.get("type");

  const displayedCharacters = typeFilter
    ? swCharacters.filter((char) => char.type.toLowerCase() === typeFilter)
    : swCharacters;

  const charEls = displayedCharacters.map((char) => (
    <div key={char.name}>
      <h3
        style={{ color: char.type.toLowerCase() === "sexy" ? "red" : "blue" }}
      >
        Name: {char.name}
      </h3>
      <p>Type: {char.type}</p>
      <hr />
    </div>
  ));

  function genNewSearchParamString(key, value) {
    const sp = new URLSearchParams(searchParams);
    if (value === null) {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }
    return `?${sp.toString()}`;
  }

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams
    });
  }

  return (
    <main>
      <h2>Home</h2>
      <div>
        <Link to={genNewSearchParamString("type", "sexy")}>Sexy</Link>
        <Link to={genNewSearchParamString("type", "nerd")}>Nerd</Link>
        <Link to={genNewSearchParamString("type", null)}>Clear</Link>
      </div>
      <div>
        <button onClick={() => handleFilterChange("type", "sexy")}>Sexy</button>
        <button onClick={() => handleFilterChange("type", "nerd")}>Nerd</button>
        <button onClick={() => handleFilterChange({})}>Clear</button>
      </div>
      <hr />
      {charEls}
    </main>
  );
}

{
  /* <Link to="?type=sexy">Sexy</Link>
<Link to="?type=nerd">Nerd</Link> */
}


