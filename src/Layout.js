import React from "react";
import AllPractitioner from "./AllPractitioner";
import AllPractitionerMenu from "./AllPractitionerMenu";
import EmployeeDropdown from "./EmployeeDropdown";
import PickDate from "./PickDate";
import SearchTreatment from "./SearchTreatment";

function Layout() {
  return (
    <div className="container">
      <div style={{ width: "50%" }}>
        <div className="title">Select Employee Dropdown</div>
        <EmployeeDropdown />
        <EmployeeDropdown />
        <AllPractitioner />
      </div>
      <div style={{ width: "50%" }}>
        <div className="title">Date Picker</div>
        <PickDate />
        <PickDate />
        <PickDate />
      </div>
    </div>
  );
}
export default Layout;
