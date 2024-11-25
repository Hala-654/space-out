import "./MissionCard.scss";
// import backImage from "../../assets/Icons/arrow_back-24px.svg";
import { useNavigate } from "react-router-dom";

function MissionCard({ mission }) {
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_API_URL;

  return (
    <div className="cards-container">
      <div className="card">
        <div className="card__header">
          <div className="card__title-bar">
            {/* <img
            className="card__back_image"
            src=""
            onClick={() => {
              navigate("/");
            }} */}
            {/* /> */}
            <h1 className="card__name">{mission.title}</h1>
          </div>
          <div className="card__header-section">
            <p>Launch Date: {mission.launch}</p>
          </div>
        </div>
        <div className="card__content">
          <img
            className="card__content--patch"
            src={`${BASE_URL}${mission.image}`}
            alt={`${mission.title} patch`}
          />
          {/* Add more mission details here as needed */}
        </div>
      </div>
    </div>
  );
}

export default MissionCard;
