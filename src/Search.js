import React from "react";
import searchIcon from "./assest/images/searchIcon.png";

function Search() {
  return (
    <div className="searchBar">
      <div style={{ marginTop: "15px", marginLeft: "15px" }}>
        <span style={{ marginRight: "15px" }}>
          <img src={searchIcon}></img>
        </span>
        <span className="searchEmployeeText">Search Employee</span>
      </div>
    </div>
  );
}
export default Search;
