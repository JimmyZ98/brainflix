import "./Header.scss";
import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo"></div>
        <div className="header__nav">
          <input className="header__search" type="text" placeholder="Search" />
          <button className="header__button">UPLOAD</button>
          <div className="header__usericon"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
