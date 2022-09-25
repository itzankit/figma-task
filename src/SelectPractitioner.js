import React, { useState } from "react";

function SelectPractioner(props) {
  const [toggleCheck, setToggleCheck] = useState(false);
  function handleCheckChange() {
    setToggleCheck(!toggleCheck);
  }
  return (
    <div style={{ height: "45px", width: "375px", marginTop: "" }}>
      <div>
        <span style={{ marginLeft: "20px" }}>
          <img src={props.image} width="29px" height="29px"></img>
        </span>
        <span className="doctorName">{props.name}</span>
        <span>
          <input
            className="checkbox"
            style={{ marginLeft: "297px" }}
            type="checkbox"
            checked={props.checked || toggleCheck}
            onChange={handleCheckChange}
          ></input>
        </span>
      </div>
    </div>
  );
}
export default SelectPractioner;
