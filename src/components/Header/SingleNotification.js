import React from "react";

const SingleNotification = ({ children, notification }) => {
  const { time, type, snippet } = notification;
  return (
    <div className="notifs-one">
      <div className="notifs-pic">
        {children}
      </div>
      <div className="notifs-info">
        <div className="notifs-time">
          {time}
        </div>
        <div className="notifs-type">
          {type}
        </div>
        <div className="notifs-snippet">
          {snippet}
        </div>
      </div>
    </div>
  );
};

export default SingleNotification;
