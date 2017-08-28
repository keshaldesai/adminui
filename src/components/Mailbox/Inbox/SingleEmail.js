import React, { Component } from "react";
import UserIcon from "../../Shared/UserIcon";
import Label from "../../Shared/Label";

class MailboxItem extends Component {
  render() {
    const { name, picture } = this.props.user;
    const { index } = this.props;
    const content = [
      "Donec porttitor tellus non magna.",
      "Aenean massa. Integer vitae nibh.",
      "Mauris quis turpis vitae purus gravida.",
      "Maecenas iaculis aliquet diam.",
      "Quisque porttitor eros nec tellus.",
      "Curabitur egestas nunc sed libero.",
      " Duis ac arcu. Nunc mauris.",
      "Donec luctus aliquet odio.",
      "Aliquam erat volutpat nulla facilisis suspendisse commodo",
      "Ut tincidunt vehicula risus."
    ];
    const colors = [
      "#1abc9c",
      "#e67e22",
      "#34495e",
      "#9b59b6",
      "#f1c40f",
      "#e74c3c",
      "#3498db",
      "#95a5a6",
      "#2ecc71",
      "#16a085"
    ];
    return (
      <div className="email flex-row">
        <div className="email-pic">
          <UserIcon picture={picture} color={colors[index]} width="40px" />
        </div>
        <div className="email-main">
          <div className="email-name">
            {name}
          </div>
          <div className="email-meta">
            <Label color={colors[index]} />
            {content[index]}
          </div>
        </div>
        <div className="email-extra">
          <div className="email-date">{`Jun ${index + 10}th`}</div>
          <div className="email-number">
            {`#${index + 1}`}
          </div>
        </div>
      </div>
    );
  }
}

export default MailboxItem;
