import { useEffect } from "react";
import "./HomePage.scss";
import Header from "../../components/Header/Header";

function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    document
      .querySelectorAll(".home__description")
      .forEach((el) => observer.observe(el));
  }, []);
  return (
    <>
      <Header />
      <div className="home-wrapper">
        <div className="home__content">
          <div className="home__description">
            <h1 className="home__title">Canadian Space Missions Explorer</h1>
            <h2 className="home__subtitle">Project Overview</h2>
            <p className="home__text">
              Embark on a journey through Canada's remarkable space exploration
              history with our interactive mission archive. This full-stack web
              application showcases the incredible missions and astronauts who
              have represented Canada in space exploration.
            </p>
          </div>
          <div className="home__description">
            <h2 className="home__subtitle">Mission Collection</h2>
            <ul className="home__list">
              <li className="home__list--point">Artemis Program</li>
              <li className="home__list--point">
                International Space Station Expeditions
              </li>
              <li className="home__list--point">Space Shuttle Missions</li>
              <li className="home__list--point">
                Canadian Astronaut Missions (1984-2025)
              </li>
            </ul>
          </div>
          <div className="home__description">
            <h2 className="home__subtitle">Missions Represented</h2>
            <p className="home__text">
              From Chris Hadfield to Jeremy Hansen, this application chronicles
              Canada's space exploration journey, featuring missions spanning
              from 1984 to the upcoming Artemis II mission in 2025.
            </p>
          </div>
          <div className="home__description">
            <h2 className="home__subtitle">
              Open Science and Data Accessibility
            </h2>
            <p className="home__text">
              The Canadian Space Agency (CSA) is dedicated to open science
              principles, making scientific data and publications freely
              available to researchers, students, industries, and the public.
              Type of data available:
            </p>
            <ul className="home__list">
              <li className="home__list--point">
                <a
                  href="https://donnees-data.asc-csa.gc.ca/dataset/?project=atmospheric_sci"
                  target="_blank"
                >
                  Atmospheric sciences
                </a>
              </li>
              <li className="home__list--point">
                <a
                  href="https://donnees-data.asc-csa.gc.ca/dataset/?project=space_environment"
                  target="_blank"
                >
                  Space environment/Space weather
                </a>
              </li>
              <li className="home__list--point">
                <a
                  href="https://donnees-data.asc-csa.gc.ca/dataset/?project=earth_observation"
                  target="_blank"
                >
                  Earth observation
                </a>
              </li>
              <li className="home__list--point">
                <a
                  href="https://donnees-data.asc-csa.gc.ca/dataset/?project=space_astronomy"
                  target="_blank"
                >
                  Space astronomy
                </a>
              </li>
              <li className="home__list--point">
                <a
                  href="https://donnees-data.asc-csa.gc.ca/dataset/?project=space_exploration"
                  target="_blank"
                >
                  Space exploration
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
