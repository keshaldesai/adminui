import React, { Component } from "react";
import Actions from "./Actions";
import Mailboxes from "./Mailboxes";
import Emails from "./Emails";

class Inbox extends Component {
  componentDidMount() {
    this.props.handleActive();
  }
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
