import React, { Component } from "react";

class MailboxItem extends Component {
  render() {
    const { name, picture } = this.props.user;
    return (
      <div className="inbox-item flex-row">
        <div className="in-item-pic">
          <img src={picture} alt="thumbnail" />
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
