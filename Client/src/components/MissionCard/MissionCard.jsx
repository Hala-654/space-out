import "./MissionCard.scss";
import backImage from "../../assets/Icons/arrow_back-24px.svg";
import { useNavigate } from "react-router-dom";

function MissionCard({
  title,
  returnPath,
  handleWarehouseEditOnClick,
  headerContent,
  children,
}) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__title-bar">
          {returnPath && (
            <img
              className="card__back_image"
              src={backImage}
              onClick={() => {
                navigate("/");
              }}
            />
          )}
          <h1 className="card__name">{title}</h1>
          {handleWarehouseEditOnClick && (
            <button
              className="card__edit-button card__edit-button--mob"
              onClick={handleWarehouseEditOnClick}
            ></button>
          )}
        </div>
        <div className="card__header-section">
          {headerContent}
          {handleWarehouseEditOnClick && (
            <button
              className="card__edit-button card__edit-button--tablet"
              onClick={handleWarehouseEditOnClick}
            ></button>
          )}
        </div>
      </div>
      <div className="card__content">{children}</div>
    </div>
  );
}

export default MissionCard;
