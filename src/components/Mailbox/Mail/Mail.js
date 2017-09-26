import React, { Component } from "react";
import Actions from "./Actions";
import Attachments from "./Attachments";
import Contents from "./Contents";
import From from "./From";
import Reply from "./Reply";

class Mail extends Component {
  componentDidMount() {
    this.props.handleActive();
  }
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
