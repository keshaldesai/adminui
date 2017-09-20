import React, { Component } from "react";
import Panel from "../../Shared/Panel";
import TextArea from "../TextArea";

class SocialItem extends Component {
  render() {
    return (
      <Panel color="#efefef">
        <div>USER PIC AND INFO</div>
        <div>CONTENT</div>

        <TextArea placeholder="Write a comment..." />
      </Panel>
    );
  }
}

export default SocialItem;
