import React, { Component } from "react";
import MailboxGroup from "./MailboxGroup";

class Mailboxes extends Component {
  render() {
    const mbArr = [
      { icon: "envelope-o", title: "Inbox" },
      { icon: "star-o", title: "Starred" },
      { icon: "paper-plane-o", title: "Sent" },
      { icon: "inbox", title: "Drafts" },
      { icon: "paperclip", title: "Attachments" }
    ];
    const otherArr = [
      { icon: "exclamation", title: "Spam" },
      { icon: "trash-o", title: "Trash" }
    ];
    const tagsArr = [
      { icon: "circle", title: "#sometag" },
      { icon: "circle", title: "#anothertag" }
    ];
    return (
      <div className="inbox-mailboxes">
        <MailboxGroup title="MAILBOXES" items={mbArr} />
        <MailboxGroup title="OTHERS" items={otherArr} />
        <MailboxGroup title="TAGS" items={tagsArr} />
      </div>
    );
  }
}

export default Mailboxes;
