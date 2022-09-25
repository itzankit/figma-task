import React, { useState } from "react";
import logo2 from "./assest/images/Ellipse 26.png";
import logo3 from "./assest/images/Ellipse 27.png";
import logo1 from "./assest/images/3.png";
import AllPractitionerMenu from "./AllPractitionerMenu";

function AllPractitioner() {
  const [isShow, setIsShow] = useState(false);
  function handlePractitionerShow() {
    setIsShow(!isShow);
  }

  return (
    <div className="dropdown">
      <div
        className={isShow ? `selectOpen` : `select`}
        onClick={handlePractitionerShow}
      >
        <div>
          <span className="ellipse3">
            <img src={logo3}></img>
          </span>
          <span className="ellipse2">
            <img src={logo2}></img>
          </span>
          <span className="ellipse1">
            <img
              style={{ marginTop: "8px", marginLeft: "5px" }}
              src={logo1}
            ></img>
          </span>
        </div>
        <div className="employee">
          <span>
            <a href="#">All Practitioners</a>
          </span>
        </div>
      </div>
      {isShow ? (
        <div style={{ marginLeft: "-400px" }}>
          <AllPractitionerMenu />
        </div>
      ) : null}
    </div>
  );
}
export default AllPractitioner;
