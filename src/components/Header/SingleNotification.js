import React from "react";

const SingleNotification = ({ children, notification }) => {
  const { time, type, snippet } = notification;
  return (
    <div className="notif-one">
      <div className="notif-icon">
        {children}
      </div>
      <div className="notif-info">
        <div className="notif-time">
          {time}
        </div>
        <div className="notif-type">
          {type}
        </div>
        <div className="notif-snippet">
          {snippet}
        </div>
      </div>
    </div>
  );
};

export default SingleNotification;
