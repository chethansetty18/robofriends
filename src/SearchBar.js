import React from "react";
import "./searchBar.css";

const SearchBar = (props) => {
  const searchStr = props.searchStr;
  return (
    <div className="searchBar">
      <h1>ROBO FRIENDS</h1>
      <input
        type="search"
        placeHolder="search"
        value={searchStr}
        onChange={props.onSearchChange}
      />
    </div>
  );
};

export default SearchBar;
