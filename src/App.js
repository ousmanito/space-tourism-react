import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import HomeContent from "./components/Home/HomeContent/HomeContent";
import Destination from './components/Destination/Destination';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Home/>
        <Nav/>
        <Routes>
           <Route path='/' element={<HomeContent/>}/>
           <Route path='/destination' element={<Destination/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
