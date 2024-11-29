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
            <img src={`${BASE_URL}${astronaut.image}`} alt={astronaut.id} />
            <div className="astronaut-info">
              <h2>{astronaut.astronaut}</h2>
              <p>Date of Birth: {astronaut.dob}</p>
              <p>From: {astronaut.from}</p>
              <p>Background: {astronaut.background}</p>
              <p>Missions: {astronaut.missions}</p>
              <p>Destination: {astronaut.planet}</p>
              <img
                className="mission-patch"
                src={`${BASE_URL}${astronaut.patch}`}
                alt="Mission Patch"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AstronautsPage;
