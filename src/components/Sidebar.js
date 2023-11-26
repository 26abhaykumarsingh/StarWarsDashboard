import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem";
import { Link, useParams } from "react-router-dom";

function Sidebar({
  contentData,
  setContentData,
  contentType,
  setContentType,
  setIsMobileMenuOpen,
}) {
  const fetchData = async (contentType) => {
    setContentType(contentType);
    const response = await fetch("https://swapi.dev/api/" + contentType);
    const responseData = await response.json();
    setContentData(responseData);
  };

  return (
    <div className="Sidebar">
      <Link to="/">
        <div className="logoContainer" onClick={() => setContentType("")}>
          <div className="starWarsLogo"></div>
        </div>
      </Link>
      {/* sidebarItems */}
      <Link
        to="/films"
        onClick={() => {
          fetchData("films");
          setIsMobileMenuOpen(false);
        }}
      >
        <SidebarItem
          title={"Films"}
          active={`${contentType === "films" ? "true" : "false"}`}
        ></SidebarItem>
      </Link>
      <Link
        to="/people"
        onClick={() => {
          fetchData("people");
          setIsMobileMenuOpen(false);
        }}
      >
        <SidebarItem
          title={"People"}
          active={`${contentType === "people" ? "true" : "false"}`}
        ></SidebarItem>
      </Link>
      <Link
        to="/planets"
        onClick={() => {
          fetchData("planets");
          setIsMobileMenuOpen(false);
        }}
      >
        <SidebarItem
          title={"Planets"}
          active={`${contentType === "planets" ? "true" : "false"}`}
        ></SidebarItem>
      </Link>
      <Link
        to="/species"
        onClick={() => {
          fetchData("species");
          setIsMobileMenuOpen(false);
        }}
      >
        <SidebarItem
          title={"Species"}
          active={`${contentType === "species" ? "true" : "false"}`}
        ></SidebarItem>
      </Link>
      <Link
        to="/starships"
        onClick={() => {
          fetchData("starships");
          setIsMobileMenuOpen(false);
        }}
      >
        <SidebarItem
          title={"Starships"}
          active={`${contentType === "starships" ? "true" : "false"}`}
        ></SidebarItem>
      </Link>
      <Link
        to="/vehicles"
        onClick={() => {
          fetchData("vehicles");
          setIsMobileMenuOpen(false);
        }}
      >
        <SidebarItem
          title={"Vehicles"}
          active={`${contentType === "vehicles" ? "true" : "false"}`}
        ></SidebarItem>
      </Link>
    </div>
  );
}

export default Sidebar;
