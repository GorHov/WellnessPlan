import React from "react";
import "./Calendar.css";

function Calendar({ categories, event }) {
  return (
    <div className="Calendar">
      {categories.map((item) => {
        return (
          <div className="calendar-item" key={Math.random()}>
            <div className="bx-1">
              <span className="month">{item.month}</span>
            </div>
            <div className="bx-2">
              {event.map((i) => {
                if (i.date === item.month) {
                  return i.status === 1 ? (
                    <span className="green" key={Math.random()}/>
                  ) : i.status === 2 ? (
                    <span className="light-blue" key={Math.random()}/>
                  ) : (
                    <span className="blue" key={Math.random()}/>
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Calendar;
