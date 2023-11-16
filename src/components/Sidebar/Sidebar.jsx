import React from "react";
import "./Sidebar.css";

const Sidebar = ({ isActive, onClick }) => {
  return (
    <div className={`sidebar ${isActive ? "active" : ""}`}>
      <button className="close-sidebar" onClick={onClick}>
        X
      </button>
      <h1>hey</h1>
    </div>
  );
};

export default Sidebar;
