import React from "react";
import "./Nav.css";

import navLogo from './logo.svg'

const Nav = () => {
  return <div className='Nav'>
      <img src={navLogo} alt='' className="navLogo"></img>
      <div className='navLine'></div>
      <div className='navBar'>
          <ol className="navLinks">
              <li>Home</li>
              <li>Destination</li>
              <li>Crew</li>
              <li>Technology</li>
          </ol>
          </div>      
  </div>;
};

export default Nav;
