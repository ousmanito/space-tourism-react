import React from "react";
import { Link } from "react-router-dom";
import "./HomeContent.css";

const Hover = () => {
  const outer = document.querySelector(".ButtonHover");
  outer.style.opacity = "50%";
  outer.style.transition = "1s ease";
};

const HoverOuter = () => {
  const outer = document.querySelector(".ButtonHover");
  outer.style.opacity = "0";
  outer.style.transition = "1s ease";
};

const HomeContent = () => {
  return (
    <div>
      <div className="HomeText">
        <h5>So, You Want To Travel To</h5>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="HomeButton">
        <Link to={"/destination"}>
          <p className="HomeP" onMouseOver={Hover}>
            EXPLORE
          </p>
        </Link>
        <div className="ButtonHover" onMouseOver={HoverOuter}></div>
      </div>
    </div>
  );
};

export default HomeContent;
