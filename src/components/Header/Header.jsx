import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/img/IMDB_logo.PNG";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Sidebar from "../Sidebar/Sidebar";
import SearchInput from "../SearchInput/SearchInput";

const Header = ({ isAuthenticated, handleAuth, onSearch }) => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setIsSidebarActive(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        <HamburgerMenu isActive={isSidebarActive} onClick={toggleSidebar} />
        <Sidebar isActive={isSidebarActive} onClick={closeSidebar} />

        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <SearchInput onSearch={onSearch} />

        <div className="auth-buttons">
          {isAuthenticated ? (
            <button onClick={handleAuth}>Sign Out</button>
          ) : (
            <button onClick={handleAuth}>Sign In</button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
