import React, { Component } from "react";
import Actions from "./Actions";
import Mailboxes from "./Mailboxes";
import Emails from "./Emails";
import Panel from "../../Shared/Panel";

class Inbox extends Component {
  componentDidMount() {
    this.props.handleActive();
  }
  render() {
    return (
      <Panel>
        <Actions />
        <div className="in-container">
          <Mailboxes />
          <Emails users={this.props.users} />
        </div>
      </Panel>
    );
  }
}

export default Inbox;
