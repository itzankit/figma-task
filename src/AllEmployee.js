import React from "react";
import logo2 from "./assest/images/Ellipse 26.png";
import logo3 from "./assest/images/Ellipse 27.png";
import logo1 from "./assest/images/12.png";

function AllEmployee() {
  return (
    <div
      className="allEmployee"
      style={{ height: "45px", width: "375px", marginTop: "80px" }}
    >
      <div>
        <span className="ellipse6">
          <img src={logo3}></img>
        </span>
        <span className="ellipse5">
          <img src={logo2}></img>
        </span>
        <span className="ellipse4">
          <img
            style={{ marginTop: "8px", marginLeft: "5px" }}
            src={logo1}
          ></img>
        </span>
      </div>
      <div className="allEmployeeText">All Employee</div>
      <div>
        <input
          className="checkbox"
          style={{ marginLeft: "345px" }}
          type="checkbox"
        ></input>
      </div>
    </div>
  );
}
export default AllEmployee;
