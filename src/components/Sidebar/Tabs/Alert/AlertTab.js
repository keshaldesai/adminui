import React, { Component } from "react";
import AlertEvent from "./AlertEvent";

class AlertTab extends Component {
  render() {
    return (
      <div className="tab alert timeline">
        <AlertEvent date="Jul 26, 2017" name="SYSTEM-WIDE ALERTS">
          <div className="event-item">
            <div className="event-meta">
              Hey you free tomorrow? Lets go shopping!
            </div>
          </div>
        </AlertEvent>
        <AlertEvent date="Jul 25, 2017" name="NODE ALERTS">
          <div className="event-item">
            <div className="event-meta">
              Hey you free tomorrow? Lets go shopping!
            </div>
          </div>
        </AlertEvent>
      </div>
    );
  }
}

export default AlertTab;
