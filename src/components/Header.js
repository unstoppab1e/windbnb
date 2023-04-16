import React, { useState } from "react";
import "./header.css";

export const Header = ({ handleChange }) => {
  return (
    <div className="header">
      <div className="logo">
        <img src="./logo.svg" alt="logo" />
      </div>
      <div className="searchBar">
        <button type="text" onClick={handleChange}>
          Search here
        </button>
      </div>
    </div>
  );
};
