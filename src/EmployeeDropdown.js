import React, { useState } from "react";
import logo2 from "./assest/images/Ellipse 26.png";
import logo3 from "./assest/images/Ellipse 27.png";
import SearchTreatment from "./SearchTreatment";
import data from "./data/treatmentData.json";

function EmployeeDropDown() {
  const [isShow, setIsShow] = useState(false);
  function handleShowDropdown() {
    setIsShow(!isShow);
  }
  return (
    <div className="dropdown">
      <div
        className={isShow ? `selectOpen` : `select`}
        onClick={handleShowDropdown}
      >
        <div>
          <span className="ellipse3">
            <img src={logo3}></img>
          </span>
          <span className="ellipse2">
            <img src={logo2}></img>
          </span>
          <span className="ellipse1">
            <div style={{ marginLeft: "5px" }}>{data.length}</div>
          </span>
        </div>
        <div className="employee">
          <span>
            <a href="#">Select employee</a>
          </span>
        </div>
      </div>
      {isShow && (
        <div style={{ marginLeft: "-300px", marginTop: "50px" }}>
          <SearchTreatment />
        </div>
      )}
    </div>
  );
}
export default EmployeeDropDown;
