import React from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
  return (
    <div className="searchbar-container">
      <h2>Search Bar</h2>
      <input placeholder="search posts..." />
    </div>
  );
}
