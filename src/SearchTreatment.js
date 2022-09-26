import React, { useState } from "react";
import searchIcon from "./assest/images/searchIcon.png";
import FilterTreament from "./FilterTreament";

function SearchTreatment() {
  const [searchTerm, setSearchTerm] = useState("");
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }
  function handleClear() {
    setSearchTerm("");
  }
  return (
    <div style={{ width: "270px" }}>
      <div className="searchTreatment">
        <div className="icon_input">
          <span>
            <img
              style={{
                marginTop: "15px",
                paddingLeft: "5px",
                paddingRight: "5px",
              }}
              src={searchIcon}
            ></img>
          </span>
          <span>
            <input
              type="text"
              className="searchInput"
              placeholder="Search Treatment..."
              value={searchTerm}
              onChange={handleChange}
            ></input>
          </span>
          {searchTerm && (
            <span>
              <button onClick={handleClear} className="clearButton">
                Clear
              </button>
            </span>
          )}
        </div>
      </div>
      <FilterTreament term={searchTerm} />
    </div>
  );
}
export default SearchTreatment;
