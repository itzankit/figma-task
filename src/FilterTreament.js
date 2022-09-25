import React from "react";
import data from "./data/treatmentData.json";

function FilterTreament(props) {
  return (
    <div style={{ paddingTop: "65px" }}>
      {data
        .filter((consult) => {
          if (props.term == "") {
            return consult;
          } else if (
            consult.name.toLowerCase().includes(props.term.toLowerCase())
          ) {
            return consult;
          }
        })
        .map((treat, index) => {
          return (
            <div className="treatment" key={index}>
              <span className="treatmentText">{treat.name}</span>
              <span>
                <input
                  className="checkbox"
                  style={{ marginLeft: "220px" }}
                  type="checkbox"
                ></input>
              </span>
            </div>
          );
        })}
    </div>
  );
}
export default FilterTreament;
