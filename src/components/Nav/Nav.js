import React from "react";
import "./Nav.css";

import navLogo from "./logo.svg";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <NavLink to={"/"}>
        <img src={navLogo} alt="" className="navLogo"></img>
      </NavLink>
      <div className="navLine"></div>
      <div className="navBar">
        <ol className="navLinks">
          <li id="home">
            <NavLink 
            to={"/"} 
            className={({isActive})=> (isActive ? 'navLinks-active' : "")}
            >Home</NavLink>
          </li>
          <li id="destination">
            <NavLink 
            to={"/destination"}
            className={({isActive})=> (isActive ? 'navLinks-active' : "")}
            >Destination</NavLink>
          </li>
          <li id="crew">
            <NavLink 
            to={"/crew"}
            className={({isActive})=> (isActive ? 'navLinks-active' : "")}
            >Crew</NavLink>
          </li>
          <li id="technology">
            <NavLink 
            to={"/technology"}
            className={({isActive})=> (isActive ? 'navLinks-active' : "")}
            >Technology</NavLink>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Nav;
