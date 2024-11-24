import { Route, Router, BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MissionCard from "./components/MissionCard/MissionCard";
import Header from "./components/Header/Header";
import "./App.scss";

const BASE_URL = import.meta.env.VITE_API_URL;

function App() {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/missions`)
      .then((response) => response.json())
      .then((data) => setMissions(data))
      .catch((error) => console.error("Error fetching missions:", error));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <div>
          {missions.map((mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
