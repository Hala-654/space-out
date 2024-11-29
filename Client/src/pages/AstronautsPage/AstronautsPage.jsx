import Header from "../../components/Header/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";

import "./AstronautsPage.scss";

const BASE_URL = import.meta.env.VITE_API_URL;

function AstronautsPage() {
  const [astronauts, setAstronauts] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/astronauts`)
      .then((response) => setAstronauts(response.data))
      .catch((error) => console.error("Error fetching astronauts:", error));
  }, []);
  //   console.log("API URL:", `${BASE_URL}/astronauts`);
  return (
    <>
      <Header />
      <div className="astronauts-page">
        {astronauts.map((astronaut) => (
          <div key={astronaut.id} className="astronaut-card">
            <h2>{astronaut.id}</h2>
            <img src={astronaut.image} alt={astronaut.id} />
            <p>Date of Birth: {astronaut.dob}</p>
            <p>From: {astronaut.from}</p>
            <p>Background: {astronaut.background}</p>
            <p>Details: {astronaut.details}</p>
            <p>Missions: {astronaut.missions}</p>
            <img src={astronaut.patch} alt="Mission Patch" />
            <p>Planet: {astronaut.planet}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default AstronautsPage;
