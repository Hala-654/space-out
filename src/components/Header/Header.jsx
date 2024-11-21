import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header-wrapper">
      <div className="header__logo">
        <Link to="/">
          <h1>Space-Out</h1>
        </Link>
      </div>
    </header>
  );
}
