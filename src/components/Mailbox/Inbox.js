import React, { Component } from "react";
import Actions from "./Inbox/Actions";

class Inbox extends Component {
  render() {
    return (
      <div className="main inbox">
        <Actions />
        <div className="inbox-container">
          <div className="mb-block inbox-mailboxes">Mailboxes</div>
          <div className="mb-block inbox-items">Items</div>
        </div>
      </div>
    );
  }
}

export default Inbox;
