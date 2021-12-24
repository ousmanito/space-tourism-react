import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import "./Home.css";


const changeBg = (string) => {
  document.getElementById('homepage').className= '';
  document.getElementById('homepage').classList.add(`${string}Page`);
}

const nameArr = ['home', 'destination', 'crew' , 'technology']



const Home = ()=> {
  let location = useLocation();
  const link = location.pathname.slice(1,).replaceAll('/',' ')
  useEffect(()=> {
  for (const name in nameArr) {
    if(link.includes(nameArr[name])) {
      changeBg(nameArr[name]);
      break;
    } else {
      changeBg('home')
    }
  }}
  ,[location.pathname])
  return <div id="homepage" className="HomePage"></div>;
};

export default Home;
