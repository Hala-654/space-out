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
        </div>
      </div>
    </>
  );
}

export default HomePage;
