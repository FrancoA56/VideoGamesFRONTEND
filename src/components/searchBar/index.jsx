import "./index.css";
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchValue);
    setSearchValue("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input 
        className="input"
        type="search"
        value={searchValue}
        onChange={handleOnChange}
        onKeyDown={handleKeyPress}
        placeholder="Insert Name"
      />
      <button className="button" onClick={handleSearch}>
        <i className="material-icons">search</i>
      </button>
    </div>
  );
};

export default SearchBar;
