import React from "react";
import Alert from "./Alert";

const AlertEvent = ({ children, date, name }) => {
  return (
    <div className="event">
      <Alert name={name} />
      <div className="event-date">
        {date}
      </div>
      <div className="alert-comp">
        {children}
      </div>
    </div>
  );
};

export default AlertEvent;
