import React, { useState } from "react";
import ReactInfiniteCalendar, {
  Calendar,
  defaultMultipleDateInterpolation,
  withMultipleDates,
} from "react-infinite-calendar";
import calendarLogo from "./assest/images/calendarLogo.png";
const MultipleDatesCalendar = withMultipleDates(Calendar);

function PickDate() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState([]);
  function handleShowCalendar() {
    setShowCalendar(!showCalendar);
  }
  function handleDateSelect(selected) {
    let newDate = defaultMultipleDateInterpolation(selected, date);
    let lastSelectedDate = newDate.slice(-1);
    console.log("NEW DATE::::::", lastSelectedDate);
    setDate(lastSelectedDate);
  }
  return (
    <div
      style={{ marginTop: "35px", marginBottom: "65px" }}
      onClick={handleShowCalendar}
    >
      <div className="pickDateDropDown">
        <div className="selectDate">
          <div>
            <span>
              <img className="calendarLogo" src={calendarLogo}></img>
            </span>
          </div>
          <div className="pickDate">
            {date.length > 0 ? (
              date.map((pick, index) => {
                let day = pick.getDate();
                let month = pick.getMonth();
                let year = pick.getFullYear();
                return (
                  <span key={index}>
                    {day}.{month}.{year}
                    <span> </span>
                  </span>
                );
              })
            ) : (
              <span>
                <a href="#">Pick Date</a>
              </span>
            )}
          </div>
        </div>
      </div>
      {showCalendar && (
        <ReactInfiniteCalendar
          Component={MultipleDatesCalendar}
          interpolateSelection={defaultMultipleDateInterpolation}
          width={362}
          height={400}
          selected={date}
          onSelect={handleDateSelect}
          theme={{
            selectionColor: "#346BD1",
            textColor: {
              default: "#FFF",
              active: "#FFF",
            },
            weekdayColor: "#142A51",
            headerColor: "#142A51",
          }}
          displayOptions={{
            showHeader: false,
            showTodayHelper: false,
            hideYearsOnSelect: true,
            showOverlay: false,
          }}
        />
      )}
    </div>
  );
}
export default PickDate;
