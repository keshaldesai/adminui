import React, { Component } from "react";
import SingleNotification from "./SingleNotification";

class Notifications extends Component {
  render() {
    const notifArr = [
      {
        time: "an hour ago",
        type: "Jack sent you a message",
        snippet:
          "Duis at risus eu elit placerat tincidunt. Donec tincidunt in libero..."
      },
      {
        time: "2 hours ago",
        type: "Sam added you to a group",
        snippet:
          "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus."
      },
      {
        time: "1 day ago",
        type: "New updates for your project",
        snippet:
          "Etiam vitae porta tortor, sed dictum ipsum. Nulla at dolor vitae."
      }
    ];
    return (
      <div className="notif">
        <div className="drop-caret ">
          <i className="fa fa-caret-up fa-2x" aria-hidden="true" />
        </div>
        <div className="drop-container">
          <div className="drop-title">YOUR NOTIFICATIONS</div>
          <div className="notif-group">
            <SingleNotification notification={notifArr[0]}>
              <img
                src="https://randomuser.me/api/portraits/thumb/men/24.jpg"
                alt="thumbnail"
              />
              <div
                className="notif-status"
                style={{ backgroundColor: "#3498DB" }}
              >
                NEW
              </div>
            </SingleNotification>
            <SingleNotification notification={notifArr[1]}>
              <img
                src="https://randomuser.me/api/portraits/thumb/women/80.jpg"
                alt="thumbnail"
              />
            </SingleNotification>
            <SingleNotification notification={notifArr[2]}>
              <i className="fa fa-github fa-3x" aria-hidden="true" />
              <div
                className="notif-status"
                style={{ backgroundColor: "#E74C3C" }}
              >
                ALERT
              </div>
            </SingleNotification>
          </div>
          <div className="notif-buttons">
            <div className="notif-button notif-mark">MARK ALL READ</div>
            <div className="notif-button notif-view">VIEW ALL</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Notifications;
