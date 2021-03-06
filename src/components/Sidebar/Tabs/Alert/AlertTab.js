import React, { Component } from "react";
import AlertEvent from "./AlertEvent";

class AlertTab extends Component {
  render() {
    return (
      <div className="tab alert timeline">
        <AlertEvent date="Jul 26, 2017" name="SYSTEM-WIDE ALERTS">
          <div className="event-item">
            <div className="event-meta">
              You haven't posts on your blog in three days. Don't forget to stay
              active!
            </div>
          </div>
        </AlertEvent>
        <AlertEvent date="Jul 25, 2017" name="SERVER ALERTS">
          <div className="event-item">
            <div className="event-meta">
              3 hours and 15 minutes of server downtime in the last month.
            </div>
          </div>
        </AlertEvent>
      </div>
    );
  }
}

export default AlertTab;
