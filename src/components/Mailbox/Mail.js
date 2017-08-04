import React, { Component } from "react";
import Actions from "./Mail/Actions";
import Attachments from "./Mail/Attachments";
import Contents from "./Mail/Contents";
import From from "./Mail/From";
import Reply from "./Mail/Reply";

class Mail extends Component {
  render() {
    return (
      <div className="main mail">
        <Actions />
        <From />
        <Contents />
        <Attachments />
        <Reply />
      </div>
    );
  }
}

export default Mail;
