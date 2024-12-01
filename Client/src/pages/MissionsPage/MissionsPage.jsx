import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MissionCard from "../../components/MissionCard/MissionCard";
import React, { useState, useEffect } from "react";

import "./MissionsPage.scss";

const BASE_URL = import.meta.env.VITE_API_URL;

function MissionsPage() {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/missions`)
      .then((response) => response.json())
      .then((data) => setMissions(data))
      .catch((error) => console.error("Error fetching missions:", error));
  }, []);

  return (
    <>
      <Header />
      <div className="missions-page">
        {missions.map((mission) => (
          <MissionCard key={mission.id} mission={mission} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default MissionsPage;
