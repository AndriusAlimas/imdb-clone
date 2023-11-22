import React, { useState } from "react";

import "./Header.css";
import Logo from "../../assets/img/IMDB_logo.PNG";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Sidebar from "../Sidebar/Sidebar";
import SearchInput from "../SearchInput/SearchInput";
import { searchMovies } from "../../api";
const Header = ({ isAuthenticated, handleAuth }) => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setIsSidebarActive(false);
  };

  const handleSearch = async (search) => {
    try {
      // Call the searchMovies function with the searchTerm
      const results = await searchMovies(search);
      // Handle the search results as needed, e.g., updating the state
      console.log(results); // Or update the state to display these results
    } catch (error) {
      console.error("Error while searching movies:", error);
    }
  };
  return (
    <header>
      <HamburgerMenu isActive={isSidebarActive} onClick={toggleSidebar} />
      <Sidebar isActive={isSidebarActive} onClick={closeSidebar} />

      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <SearchInput onSearch={handleSearch} />
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
