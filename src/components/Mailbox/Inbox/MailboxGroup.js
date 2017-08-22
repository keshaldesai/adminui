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
          return (
            <div className={`in-group-item flex-row`} key={item.title}>
              <i className={`fa fa-${item.icon}`} aria-hidden="true" />
              <span className="box-title">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MailboxGroup;
