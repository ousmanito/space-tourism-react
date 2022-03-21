import React, { useState } from "react";
import "./Nav.css";
import navBurger from "./icon-hamburger.svg";
import burgerClose from "./icon-close.svg";

import navLogo from "./logo.svg";
import { NavLink } from "react-router-dom";



const menuCheck = ()=> {
  if(window.innerWidth < 1110) {
    document.querySelector('.navMenu').style.display = 'none'
    document.querySelector('.navBurger').style.opacity = 1
    document.querySelector('.navClose').style.display = 'none'
  }
}

window.addEventListener('resize', menuCheck);


const menuOpen = () => {
  if ((document.querySelector(".navMenu").style.display == 'none')) {
    document.querySelector(".navMenu").style.display = "block";
    document.querySelector('.navBurger').style.opacity = 0
    document.querySelector('.navClose').style.display = 'block'


  } else {
    document.querySelector('.navMenu').style.display = 'none'
    document.querySelector('.navBurger').style.opacity = 1
    document.querySelector('.navClose').style.display = 'none'

  }
};
const menuClick = ()=> {
  document.querySelector('.navMenu').style.display = 'none'
  document.querySelector('.navBurger').style.opacity = 1
  document.querySelector('.navClose').style.display = 'none'}


const Nav = () => {
  return (
    <div className="Nav">
      <NavLink to={"/"}>
        <img src={navLogo} alt="" className="navLogo"></img>
      </NavLink>
      <img src={navBurger} className="navBurger" onClick={menuOpen}></img>
      <img
        src={burgerClose}
        alt=""
        className="navClose"
        onClick={menuOpen}
      ></img>
      <ol className="navMenu" onClick={menuClick}>
        <li>
          <NavLink to={"/"}>01. Home</NavLink>
        </li>
        <li>
          <NavLink to={"/destination/moon"}>02. Destination</NavLink>
        </li>
        <li>
          <NavLink to={"/crew/0"}>03. Crew</NavLink>
        </li>
        <li>
          <NavLink to={"/technology/0"}>04. Technology</NavLink>
        </li>
      </ol>
      <div className="navLine"></div>
      <div className="navBar">
        <ol className="navLinks">
          <li id="home">
            <NavLink
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li id="destination">
            <NavLink
              to={"/destination/moon"}
            >
              Destination
            </NavLink>
          </li>
          <li id="crew">
            <NavLink
              to={"/crew/0"}
            >
              Crew
            </NavLink>
          </li>
          <li id="technology">
            <NavLink
              to={"/technology/0"}
            >
              Technology
            </NavLink>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Nav;
