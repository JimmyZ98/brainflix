import { Link } from "react-router-dom";
import "./Header.scss";
import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo"></Link>
        <div className="header__nav">
          <input className="header__search" type="text" placeholder="Search" />
          <Link to="/upload" className="header__button">
            UPLOAD
          </Link>
          <div className="header__usericon"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
