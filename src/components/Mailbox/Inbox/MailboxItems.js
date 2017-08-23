import React, { Component } from "react";
import MailboxItem from "./MailboxItem";

class MailboxItems extends Component {
  render() {
    const { users } = this.props;
    if (!users) {
      return <div />;
    }
    const emailUsers = users.slice(1, 11);
    return (
      <div className="inbox-items">
        {emailUsers.map(user => {
          return <MailboxItem user={user} />;
        })}
      </div>
    );
  }
}

export default MailboxItems;
