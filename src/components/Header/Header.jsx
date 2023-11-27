import React, { useState } from "react";

import Logo from "../../assets/img/IMDB_logo.PNG";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Sidebar from "../Sidebar/Sidebar";
import SearchInput from "../SearchInput/SearchInput";

import { Container, Content, LogoContainer } from "./Header.styles";
import "./Header.css";
const Header = ({ isAuthenticated, handleAuth, onSearch }) => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setIsSidebarActive(false);
  };

  return (
    <Container>
      <Content>
        <HamburgerMenu isActive={isSidebarActive} onClick={toggleSidebar} />
        <Sidebar isActive={isSidebarActive} onClick={closeSidebar} />

        <LogoContainer>
          <img src={Logo} alt="Logo" />
        </LogoContainer>

        <SearchInput onSearch={onSearch} />

        <div className="auth-buttons">
          {isAuthenticated ? (
            <button onClick={handleAuth}>Sign Out</button>
          ) : (
            <button onClick={handleAuth}>Sign In</button>
          )}
        </div>
      </Content>
    </Container>
  );
};

export default Header;
