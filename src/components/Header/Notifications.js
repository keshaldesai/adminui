import React, { Component } from "react";

class Notifications extends Component {
  render() {
    return (
      <div className="notifs">
        <div className="drop-caret ">
          <i className="fa fa-caret-up fa-2x" aria-hidden="true" />
        </div>
        <div className="drop-container">
          <div className="drop-title">YOUR NOTIFICATIONS</div>
          <div className="notifs-group">
            <div className="notifs-pic">X</div>
            <div className="notifs-info">
              Lorum impsum dolor et su nantes rocinante.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Notifications;
