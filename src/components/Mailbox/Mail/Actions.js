import React, { Component } from "react";
import SingleButton from "../Shared/SingleButton";

class Actions extends Component {
  render() {
    return (
      <div className="mb-group mail-actions">
        <SingleButton icon="arrow-left" />
        <SingleButton icon="pencil-square-o" />
        <SingleButton icon="print" />
      </div>
    );
  }
}

export default Actions;
