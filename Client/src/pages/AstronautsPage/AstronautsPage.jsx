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
            <img
              className="astronaut__img"
              src={`${BASE_URL}${astronaut.image}`}
              alt={astronaut.id}
            />
            <div className="astronaut-info">
              <h2 className="astronaut__name">{astronaut.astronaut}</h2>
              <p className="astronaut__details">
                <strong>Date of Birth:</strong> {astronaut.dob}
              </p>
              <p className="astronaut__details">
                <strong>From:</strong> {astronaut.from}
              </p>
              <p className="astronaut__details">
                <strong>Background:</strong> {astronaut.background}
              </p>
              <p className="astronaut__details">
                <strong>Missions:</strong> {astronaut.missions}
              </p>
              <p className="astronaut__details">
                <strong>Destination:</strong> {astronaut.planet}
              </p>
              <p className="astronaut__link">
                <strong>Learn more: </strong>
                <a href={astronaut.details} target="_blank">
                  {astronaut.astronaut}
                </a>
              </p>
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
