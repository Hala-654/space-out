import Header from "../../components/Header/Header";
import React, { useState, useEffect } from "react";

import "./AstronautsPage.scss";

const BASE_URL = import.meta.env.VITE_API_URL;

function AstronautsPage() {
  const [astronaut, setAstronaut] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/astronauts`)
      .then((response) => response.json())
      .then((data) => setAstronaut(data))
      .catch((error) => console.error("Error fetching astronauts:", error));
  }, []);
  return (
    <>
      <Header />
      <div className="astronauts-page">
        {astronaut.map((astronaut) => (
          <MissionCard key={astronaut.id} astronaut={astronaut} />
        ))}
      </div>
    </>
  );
}

export default AstronautsPage;
