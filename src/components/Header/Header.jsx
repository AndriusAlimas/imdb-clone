import React from "react";

import "./Header.css";
import Logo from "../../assets/img/IMDB_logo.PNG";
const Header = ({ isAuthenticated, handleAuth }) => {
  return (
    <header>
      <div className="hamburger-menu">Menu</div>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="auth-buttons">
        {isAuthenticated ? (
          <button onClick={handleAuth}>Sign Out</button>
        ) : (
          <button onClick={handleAuth}>Sign In</button>
        )}
      </div>
    </header>
  );
};

export default Header;
