import React from "react";
import "./Destination.css";
import { NavLink, Outlet } from "react-router-dom";

const Destination = () => {
  return (
    <>
      <div className="destinationText">
        <ul>
          <li>Pick your destination</li>
        </ul>
      </div>
      <div className="destination">
        <div className="destinationImage"></div>
        <div className="destinationNav">
          <ul className="destinationLinks">
            <NavLink
              to="/destination/moon"
              className={({ isActive }) => (isActive ? "navLinks-active" : "")}
            >
              <li className="grid-1">Moon</li>
            </NavLink>
            <NavLink
              to="/destination/mars"
              className={({ isActive }) => (isActive ? "navLinks-active" : "")}
            >
              <li className="grid-2">Mars</li>
            </NavLink>
            <NavLink
              to="/destination/europa"
              className={({ isActive }) => (isActive ? "navLinks-active" : "")}
            >
              <li className="grid-3">Europa</li>
            </NavLink>
            <NavLink
              to="/destination/titan"
              className={({ isActive }) => (isActive ? "navLinks-active" : "")}
            >
              <li className="grid-4">Titan</li>
            </NavLink>
            <Outlet />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Destination;
