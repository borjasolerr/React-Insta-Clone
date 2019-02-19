import React from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
  return (
    <div className="searchbar-environment-container">
      <div className="searchbar-container">
        <div className="searchbar-left-container">
          <img className="searchbar-logo-symbol" src="/assets/instagram-logo.png" alt="instagram logo" />
          <img className="searchbar-logo-name" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="instagram name logo" />
        </div>
        <div className="searchbar-middle-container">
          <input className="searchbar-input" placeholder="Search" />
        </div>
        <div className="searchbar-right-container">
          <img className="searchbar-icon" src="/assets/instagram-compass.svg" alt="instagram icon" />
          <img className="searchbar-icon" src="/assets/instagram-heart.svg" alt="instagram icon" />
          <img className="searchbar-icon" src="/assets/instagram-person.svg" alt="instagram icon" />
        </div>
      </div>
    </div>
  );
}
