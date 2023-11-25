import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem";
import { Link } from "react-router-dom";

function Sidebar({ contentData, setContentData }) {
  const [contentType, setContentType] = useState("");

  const fetchData = async (contentType) => {
    setContentType(contentType);
    const response = await fetch("https://swapi.dev/api/" + contentType);
    const responseData = await response.json();
    console.log(responseData);
    setContentData(responseData);
  };

  // useEffect(() => {
  //   fetchData(contentType);
  // }, []);

  useEffect(() => {
    console.log(contentType);
  }, [contentType]);

  return (
    <div className="Sidebar">
      <Link to="/">
        <div className="logoContainer">
          <div className="starWarsLogo"></div>
        </div>
      </Link>
      {/* sidebarItems */}
      <Link
        to="/films"
        onClick={() => {
          fetchData("films");
          // setContentType("films");
        }}
      >
        <SidebarItem
          title={"Films"}
          active={`${contentType === "films" ? "true" : "false"}`}
        ></SidebarItem>
      </Link>
      <Link to="/people" onClick={() => fetchData("people")}>
        <SidebarItem
          title={"People"}
          active={`${contentType === "people" ? "true" : "false"}`}
        ></SidebarItem>
      </Link>
      <Link to="/planets" onClick={() => fetchData("planets")}>
        <SidebarItem
          title={"Planets"}
          active={`${contentType === "planets" ? "true" : "false"}`}
        ></SidebarItem>
      </Link>
      <Link to="/species" onClick={() => fetchData("species")}>
        <SidebarItem
          title={"Species"}
          active={`${contentType === "species" ? "true" : "false"}`}
        ></SidebarItem>
      </Link>
      <Link to="/starships" onClick={() => fetchData("starships")}>
        <SidebarItem
          title={"Starships"}
          active={`${contentType === "starships" ? "true" : "false"}`}
        ></SidebarItem>
      </Link>
      <Link to="/vehicles" onClick={() => fetchData("vehicles")}>
        <SidebarItem
          title={"Vehicles"}
          active={`${contentType === "vehicles" ? "true" : "false"}`}
        ></SidebarItem>
      </Link>
    </div>
  );
}

export default Sidebar;
