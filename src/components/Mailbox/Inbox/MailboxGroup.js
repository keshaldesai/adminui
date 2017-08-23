import React, { Component } from "react";

class MailboxGroup extends Component {
  render() {
    const { title, items } = this.props;
    const groupName = title.toLowerCase();
    return (
      <div className={`inbox-group group-${groupName}`}>
        <div className="in-group-title">
          {title}
        </div>
        {items.map(item => {
          const { title, icon, notifs } = item;
          const notif = notifs
            ? <span className="group-notif">
                {notifs}
              </span>
            : "";
          return (
            <div className={`in-group-item flex-row`} key={title}>
              <div className="group-item-icon">
                <i className={`fa fa-${icon}`} aria-hidden="true" />
              </div>
              <span className="box-title">
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
