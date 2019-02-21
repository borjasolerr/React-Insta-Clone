import React from "react";
import "./SearchBar.css";
import styled from "styled-components";

export default function SearchBar(props) {
  const searchValue = props.searchValue;
  const handleSearch = event => props.handleSearch(event.target.value);

  return (
    <div className="searchbar-environment-container">
      <div className="searchbar-container">
        {/*left part of the navbar - logos */}
        <div className="searchbar-left-container">
          <img className="searchbar-logo-symbol" src="/assets/instagram-logo.png" alt="instagram logo" />
          <img className="searchbar-logo-name" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="instagram name logo" />
        </div>
        {/*middle part of navbar - search bar */}
        <div className="searchbar-middle-container">
          <input value={searchValue} onChange={handleSearch} className="searchbar-input" placeholder="Search" />
        </div>
        {/*right part of navbar - icons */}
        <div className="searchbar-right-container">
          <img className="searchbar-icon" src="/assets/compass-icon.svg" alt="instagram icon" />
          <img className="searchbar-icon" src="/assets/heart-icon.svg" alt="instagram icon" />
          <img className="searchbar-icon" src="/assets/person-icon.svg" alt="instagram icon" />
        </div>
      </div>
    </div>
  );
}

const StyledSearchBar = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const StyledEnvironmentContainer = styled.div`
  box-sizing: border-box;
  background-color: white;
  width: 100%;
  height: 70px;
  position: fixed;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #dbdbdb;
  top: 0;
`;
