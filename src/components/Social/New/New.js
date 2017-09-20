import React, { Component } from "react";
import TextArea from "../TextArea";
import Actions from "./Actions";
import Send from "./Send";
import Panel from "../../Shared/Panel";

class New extends Component {
  render() {
    return (
      <Panel color="#efefef">
        <TextArea placeholder="What's on your mind?" height="140px" />
        <div className="soc-options flex-row">
          <Actions />
          <Send />
        </div>
      </Panel>
    );
  }
}

export default New;
