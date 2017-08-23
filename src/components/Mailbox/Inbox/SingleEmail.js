import React, { Component } from "react";
import UserIcon from "../../Shared/UserIcon";

class MailboxItem extends Component {
  render() {
    const { name, picture } = this.props.user;
    return (
      <div className="email flex-row">
        <div className="email-pic">
          <UserIcon picture={picture} color="#ffb03b" width="40px" />
        </div>
        <div className="email-main">
          {name}
        </div>
        <div className="email-date">DATE</div>
      </div>
    );
  }
}

export default MailboxItem;
