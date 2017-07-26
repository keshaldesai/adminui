import React from "react";

const HistoryEvent = ({ children, date, comp }) => {
  return (
    <div className="history-event">
      {children}
      <div className="history-date">
        {date}
      </div>
      <div className="history-comp">
        {comp}
      </div>
    </div>
  );
};

export default HistoryEvent;
