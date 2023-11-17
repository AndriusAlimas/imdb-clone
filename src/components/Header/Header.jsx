import React, { useState } from "react";

import "./Header.css";
import Logo from "../../assets/img/IMDB_logo.PNG";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Sidebar from "../Sidebar/Sidebar";
const Header = ({ isAuthenticated, handleAuth }) => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setIsSidebarActive(false);
  };

  return (
    <header>
      <HamburgerMenu isActive={isSidebarActive} onClick={toggleSidebar} />
      <Sidebar isActive={isSidebarActive} onClick={closeSidebar} />

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
