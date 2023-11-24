import React from "react";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem";
import { Link } from "react-router-dom";

function Sidebar({ contentData, setContentData }) {
  const fetchData = async (contentType) => {
    console.log(contentType);
    const response = await fetch("https://swapi.dev/api/" + contentType);
    const responseData = await response.json();
    console.log(responseData);
    setContentData(responseData);
  };

  return (
    <div className="Sidebar">
      <Link to="/">
        <div className="logoContainer">
          <div className="starWarsLogo"></div>
        </div>
      </Link>
      {/* sidebarItems */}
      <Link to="/films" onClick={() => fetchData("films")}>
        <SidebarItem title={"Films"}></SidebarItem>
      </Link>
      <Link to="/people" onClick={() => fetchData("people")}>
        <SidebarItem title={"People"}></SidebarItem>
      </Link>
      <Link to="/planets" onClick={() => fetchData("planets")}>
        <SidebarItem title={"Planets"}></SidebarItem>
      </Link>
      <Link to="/species" onClick={() => fetchData("species")}>
        <SidebarItem title={"Species"}></SidebarItem>
      </Link>
      <Link to="/starships" onClick={() => fetchData("starships")}>
        <SidebarItem title={"Starships"}></SidebarItem>
      </Link>
      <Link to="/vehicles" onClick={() => fetchData("vehicles")}>
        <SidebarItem title={"Vehicles"}></SidebarItem>
      </Link>
    </div>
  );
}

export default Sidebar;
