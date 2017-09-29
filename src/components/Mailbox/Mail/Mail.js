import React, { Component } from "react";
import Actions from "./Actions";
import Attachments from "./Attachments";
import Contents from "./Contents";
import From from "./From";
import Reply from "./Reply";
import Panel from "../../Shared/Panel";

class Mail extends Component {
  componentDidMount() {
    this.props.handleActive();
  }
  render() {
    return (
      <Panel>
        <Actions />
        <From />
        <Contents />
        <Attachments />
        <Reply />
      </Panel>
    );
  }
}

export default Mail;
