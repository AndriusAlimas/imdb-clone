import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faTv,
  faUser,
  faListAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
const Sidebar = ({ isActive, onClick }) => {
  return (
    <div className={`sidebar ${isActive ? "active" : ""}`}>
      <button className="close-sidebar" onClick={onClick}>
        X
      </button>
      {/* My sIDEBAR MENU */}
      <menu className="sidebar-menu">
        <li>
          <FontAwesomeIcon icon={faFilm} /> <a href="/movies">Movies</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faTv} /> <a href="/tvshows">TV Shows</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} />{" "}
          <a href="/celebrities">Celebrities</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faListAlt} />{" "}
          <a href="/watchlist">Watchlist</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faStar} /> <a href="/ratings">Ratings</a>
        </li>
      </menu>
    </div>
  );
};

export default Sidebar;
