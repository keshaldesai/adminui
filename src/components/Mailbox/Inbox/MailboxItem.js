import React, { Component } from "react";
import UserIcon from "../../Shared/UserIcon";

class MailboxItem extends Component {
  render() {
    const { name, picture } = this.props.user;
    return (
      <div className="inbox-item flex-row">
        <div className="in-item-pic">
          <UserIcon picture={picture} color="#ffb03b" width="40px" />
        </div>
        <div className="in-item-main">
          {name}
        </div>
        <div className="in-item-date">DATE</div>
      </div>
    );
  }
}

export default MailboxItem;
