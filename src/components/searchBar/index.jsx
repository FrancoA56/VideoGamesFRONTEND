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
    <div>
      <input
        type="search"
        value={searchValue}
        onChange={handleOnChange}
        onKeyDown={handleKeyPress}
        placeholder="ID o Name"
      />
      <button onClick={handleSearch}>Agregar</button>
    </div>
  );
};

export default SearchBar;
