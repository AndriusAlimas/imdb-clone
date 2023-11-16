import React from "react";
import "./HamburgerMenu.css";

const HamburgerMenu = ({ isActive, onClick }) => {
  return (
    <div
      className={`hamburger-menu ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
    </div>
  );
};

export default HamburgerMenu;
