import React from "react";
import { useParams } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import HomeContent from "./components/Home/HomeContent/HomeContent";
import Destination from "./components/Destination/Destination";
import DestinationCard from "./components/Destination/DestinationCard/DestinationCard";
import Crew from "./components/Crew/Crew";
import CrewCard from "./components/Crew/CrewCard/CrewCard";
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
        <Home />
        <Nav />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/destination" element={<Destination />}>
            <Route path=":slug" element={<DestinationCard/>}/>
          </Route>
          <Route path='/crew' element={<Crew/>}>
            <Route path=':slog' element={<CrewCard/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
