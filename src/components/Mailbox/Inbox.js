import React, { Component } from "react";
import Actions from "./Inbox/Actions";
import Mailboxes from "./Inbox/Mailboxes";
import Emails from "./Inbox/Emails";

class Inbox extends Component {
  render() {
    return (
      <div className="main inbox">
        <Actions />
        <div className="inbox-container">
          <Mailboxes />
          <Emails users={this.props.users} />
        </div>
      </div>
    );
  }
}

export default Inbox;
