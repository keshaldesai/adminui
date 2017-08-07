import React, { Component } from "react";

class From extends Component {
  render() {
    return (
      <div className="mb-block mail-from flex-row">
        <div className="from-user flex-row">
          <img
            src="https://randomuser.me/api/portraits/thumb/men/72.jpg"
            alt="user"
          />
          <div className="from-info">
            <div className="from-email">
              From: Rick Olsen - rick.olsen@example.com
            </div>
            <div className="from-subject">
              Subject: Concerning the proposal from our last meeting
            </div>
          </div>
        </div>
        <div className="from-extra">
          <div className="from-tag">PROPOSALS</div>
          <div className="from-date">Jul 15th, 2:40PM</div>
        </div>
      </div>
    );
  }
}

export default From;
