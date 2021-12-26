import React from "react";
import { NavLink } from "react-router-dom";
import "./Technology.css";

const Technology = () => {
  return (
    <div>
        <div className="techText"></div>
      <div className="numbers">
        <NavLink
          to={"/technology/0"}
          className={({ isActive }) => (isActive ? "numbersActive" : "")}
        >
          <span><p>1</p></span>
        </NavLink>
        <NavLink
          to={"/technology/1"}
          className={({ isActive }) => (isActive ? "numbersActive" : "")}
        >
          <span><p>2</p></span>
        </NavLink>
        <NavLink
          to={"/technology/2"}
          className={({ isActive }) => (isActive ? "numbersActive" : "")}
        >
          <span><p>3</p></span>
        </NavLink>
      </div>

    </div>
  );
};

export default Technology;
