import React, { useState } from "react";
import data from "./data/practitionerData";
import SelectPractioner from "./SelectPractitioner";

function SelectAllPractitioner() {
  const [allChecked, setAllChecked] = useState(false);
  function handlechange() {
    setAllChecked(!allChecked);
  }
  return (
    <div>
      <div style={{ marginLeft: "25px", marginTop: "15px", height: "40px" }}>
        <div>
          <span className="allPractitionerText">All Practitioner</span>
          <span>
            <input
              className="checkbox"
              style={{ marginLeft: "320px" }}
              type="checkbox"
              checked={allChecked}
              onChange={handlechange}
            ></input>
          </span>
        </div>
      </div>
      <div>
        {data.map((pract, index) => {
          return (
            <SelectPractioner
              key={index}
              image={pract.image}
              name={pract.name}
              checked={allChecked}
              onChange={() => {}}
            />
          );
        })}
      </div>
    </div>
  );
}
export default SelectAllPractitioner;
