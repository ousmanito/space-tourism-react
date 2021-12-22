import React from "react";
import "./Nav.css";

import navLogo from "./logo.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <Link to={"/"}>
        <img src={navLogo} alt="" className="navLogo"></img>
      </Link>
      <div className="navLine"></div>
      <div className="navBar">
        <ol className="navLinks">
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/destination'}>Destination</Link></li>
          <li><Link to={'/crew'}>Crew</Link></li>
          <li><Link to={'/technology'}>Technology</Link></li>
        </ol>
      </div>
    </div>
  );
};

export default Nav;
