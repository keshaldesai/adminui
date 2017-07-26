import React from "react";
import SocialUser from "../Social/SocialUser";

const HistoryEvent = ({ children, date, user }) => {
  return (
    <div className="history-event">
      <SocialUser name={user.name} picture={user.picture} />
      <div className="history-date">
        {date}
      </div>
      <div className="history-comp">
        {children}
      </div>
    </div>
  );
};

export default HistoryEvent;
