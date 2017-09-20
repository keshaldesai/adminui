import React, { Component } from "react";
import TextArea from "./TextArea";
import Actions from "./Actions";
import Send from "./Send";

class New extends Component {
  render() {
    return (
      <div className="soc-new">
        <TextArea />
        <div className="soc-options flex-row">
          <Actions />
          <Send />
        </div>
      </div>
    );
  }
}

export default New;
