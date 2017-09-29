import React, { Component } from "react";
import UserIcon from "../../Shared/UserIcon";
import Label from "../../Shared/Label";

class From extends Component {
  render() {
    return (
      <div className="mb-block mail-from">
        <div className="from-user">
          <UserIcon
            picture="https://randomuser.me/api/portraits/thumb/men/72.jpg"
            color="#bdd4de"
            width="40px"
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
          <Label color="#3498db">PROPOSALS</Label>
          <div className="from-date">Jul 15th, 2:40PM</div>
        </div>
      </div>
    );
  }
}

export default From;
