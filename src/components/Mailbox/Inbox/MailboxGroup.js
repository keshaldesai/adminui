import React, { Component } from "react";
import Label from "../../Shared/Label";

class MailboxGroup extends Component {
  render() {
    const { title, items } = this.props;
    const groupName = title.toLowerCase();
    return (
      <div className={`in-group group-${groupName}`}>
        <div className="in-group-title">
          {title}
        </div>
        {items.map(item => {
          const { title, icon, notifs } = item;
          const notif = notifs
            ? <Label>
                {notifs}
              </Label>
            : "";
          return (
            <div className={`in-item flex-row`} key={title}>
              <div className="in-item-icon">
                <i className={`fa fa-${icon}`} aria-hidden="true" />
              </div>
              <span className="in-item-title">
                {title}
              </span>
              {notif}
            </div>
          );
        })}
      </div>
    );
  }
}

export default MailboxGroup;
