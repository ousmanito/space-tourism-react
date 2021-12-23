import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import "./Home.css";


const changeBg = (string) => {
  console.log('ok fct')
  document.getElementById('homepage').className= '';
  document.getElementById('homepage').classList.add(`${string}Page`);
}

const Home = ()=> {
  let location = useLocation();
  console.log(location)
  useEffect(()=> {
    console.log(location.pathname.slice(1,))
    if(location.pathname === '/') {
      changeBg('home');
    } else {
      changeBg(location.pathname.slice(1,))
    }
  }
  ,[location.pathname])
  return <div id="homepage" className="HomePage"></div>;
};

export default Home;
