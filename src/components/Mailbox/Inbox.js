import React, { Component } from "react";

class Inbox extends Component {
  render() {
    return (
      <div className="main inbox">
        <div className="mb-block mail-actions">Actions</div>
        <div className="inbox-container flex-row">
          <div className="mb-block inbox-mailboxes">Mailboxes</div>
          <div className="mb-block inbox-items">Items</div>
        </div>
      </div>
    );
  }
}

export default Inbox;
