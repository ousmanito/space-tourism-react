import React from "react";
import "./Home.css";

const Hover = () => {
 const outer = document.querySelector('.ButtonHover');
 outer.style.opacity = '50%';
 outer.style.transition='1s ease';


}

const HoverOuter = ()=>{
  const outer = document.querySelector('.ButtonHover');
  outer.style.opacity = '0';
  outer.style.transition='1s ease';
}


const Home = () => {
  return (
    <div className="HomePage">
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
        <p className="HomeP" onMouseOver={Hover}>EXPLORE</p>
        <div className="ButtonHover" onMouseOver={HoverOuter}></div>
      </div>
    </div>
  );
};

export default Home;
