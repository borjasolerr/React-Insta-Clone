import React from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
  return (
    <div className="searchbar-container">
      <div className="searchbar-left-container">
        <img className="searchbar-logo-symbol" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Instagram_simple_icon.svg/2000px-Instagram_simple_icon.svg.png" alt="instagram logo" />
        <img className="searchbar-logo-name" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="instagram name logo" />
      </div>
      <div className="searchbar-middle-container">
        <input className="searchbar-input" placeholder="🔍Search" />
      </div>
      <div className="searchbar-right-container">
        <img className="searchbar-icon" src="http://www.logospng.com/images/1/instagram-clipart-png-transparent-background-clipground-1936.png" alt="instagram icon" />
        <img className="searchbar-icon" src="http://www.logospng.com/images/1/instagram-clipart-png-transparent-background-clipground-1936.png" alt="instagram icon" />
        <img className="searchbar-icon" src="http://www.logospng.com/images/1/instagram-clipart-png-transparent-background-clipground-1936.png" alt="instagram icon" />
      </div>
    </div>
  );
}
