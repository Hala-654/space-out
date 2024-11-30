import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header-wrapper">
      <nav className="header__nav">
        <div className="header__container">
          <div>
            <div className="header__logo">
              <Link className="header__link" to="/">
                Space-Out
              </Link>
            </div>
          </div>
          <div className="header__pages">
            <div className="header__pages">
              <Link className="header__pages--link" to="/missions">
                Missions
              </Link>
            </div>
            <div className="header__pages">
              <Link className="header__pages--link" to="/astronauts">
                Astronauts
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="header__background">
        <div className="header__background--text">Let your freak flag fly</div>
      </div>
    </header>
  );
}

export default Header;
