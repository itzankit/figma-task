import React from "react";
import AllEmployee from "./AllEmployee";
import Search from "./Search";
import SelectAllPractitioner from "./SelectAllPractitioner";
import SelectPractioner from "./SelectPractitioner";

function AllPractitionerMenu() {
  return (
    <div className="practitionerMenu">
      <Search />
      <AllEmployee />
      <div className="allEmployee">
        <SelectPractioner
          image="./assest/images/Ellipse 27.png"
          name="Dr. Siegfried Tausend"
        />
      </div>
      <SelectAllPractitioner />
    </div>
  );
}
export default AllPractitionerMenu;
