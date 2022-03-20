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
      </div>
    </>
  );
};

export default Destination;
