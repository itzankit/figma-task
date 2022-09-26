import React, { useEffect, useState } from "react";
import data from "./data/practitionerInfo.json";
import SelectPractioner from "./SelectPractitioner";

function SelectAllPractitioner() {
  const [allChecked, setAllChecked] = useState(false);
  function handleAllChange() {
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
              onChange={handleAllChange}
              checked={allChecked}
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
