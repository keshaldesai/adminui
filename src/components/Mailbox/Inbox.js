import React, { Component } from "react";
import Actions from "./Inbox/Actions";
import Mailboxes from "./Inbox/Mailboxes";
import MailboxItems from "./Inbox/MailboxItems";

class Inbox extends Component {
  render() {
    return (
      <div className="main inbox">
        <Actions />
        <div className="inbox-container">
          <Mailboxes />
          <MailboxItems users={this.props.users} />
        </div>
      </div>
    );
  }
}

export default Inbox;
