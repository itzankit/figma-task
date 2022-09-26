import React, { useEffect, useState } from "react";
import data from "./data/treatmentData.json";

function FilterTreament(props) {
  const [searchResult, setSearchResult] = useState("");
  useEffect(() => {
    const filteredData = data.filter((consult) => {
      if (props.term == "") {
        return consult;
      } else if (
        consult.name.toLowerCase().includes(props.term.toLowerCase())
      ) {
        return consult;
      }
    });
    setSearchResult(filteredData);
  }, [props.term]);
  return (
    <div style={{ paddingTop: "65px" }}>
      {searchResult.length > 0 ? (
        searchResult.map((treat, index) => {
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
        })
      ) : (
        <div className="notFoundText">Not found</div>
      )}
    </div>
  );
}
export default FilterTreament;
