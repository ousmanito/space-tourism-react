import React from "react";
import './Crew.css'

import { NavLink, Outlet } from "react-router-dom";

const Crew = () => {
 

  console.log("crew here");
  return (
    <div>
      <p className="crewMeet">Meet your crew</p>
      <div className="previous"></div>
      <div className="next"></div>
      <div className="dots">
        <NavLink
            to={"/crew/0"}
            className={({ isActive }) => (isActive ? "dotActive" : "")}
          >
            <span></span>
          </NavLink>
          <NavLink
            to={"/crew/1"}
            className={({ isActive }) => (isActive ? "dotActive" : "")}
          >
            <span></span>
          </NavLink>
          <NavLink
            to={"/crew/2"}
            className={({ isActive }) => (isActive ? "dotActive" : "")}
          >
            <span></span>
          </NavLink>
          <NavLink
            to={"/crew/3"}
            className={({ isActive }) => (isActive ? "dotActive" : "")}
          >
            <span></span>
          </NavLink>
      </div>
          <Outlet/>

      {/* {[0, 1, 2, 3].map(function (index) {
          return (
            <div>
              <div className="crewTitle">
                <h1>{data.crew[index].role}</h1>
              </div>
              <div className="crewName">
                <h1>{data.crew[index].name}</h1>
              </div>
              <div className="crewText">
                <h1>{data.crew[index].bio}</h1>
              </div>
              <div className="crewImage">
                <img
                  src={require(`${data.crew[index].images.png}`)}
                  alt=""
                ></img>
              </div> */}
    </div>
  );
};

export default Crew;
