import React from "react";
import logo2 from "./assest/images/Ellipse 26.png";
import logo3 from "./assest/images/Ellipse 27.png";
import data from "./data/treatmentData.json";

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
          <div style={{ marginLeft: "5px", color: "white" }}>{data.length}</div>
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
