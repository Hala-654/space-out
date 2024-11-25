import "./HomePage.scss";
import Header from "../../components/Header/Header";

function HomePage() {
  return (
    <>
      <Header />
      <div className="home-wrapper">
        <div className="home__description">
          <h1 className="home__title">Canadian Space Missions Explorer</h1>
          <h3>Project Overview</h3>
          <h3>
            Embark on a journey through Canada's remarkable space exploration
            history with our interactive mission archive. This full-stack web
            application showcases the incredible missions and astronauts who
            have represented Canada in space exploration.
          </h3>
        </div>
        <div className="home__description"></div>
      </div>
    </>
  );
}

export default HomePage;
