import React, { Component } from "react";
import SingleButton from "../Shared/SingleButton";
import ButtonGroup from "../Shared/ButtonGroup";

class Actions extends Component {
  render() {
    const icons = ["reply", "reply-all", "share"];
    return (
      <div className="mb-group mail-actions">
        <SingleButton icon="arrow-left" />
        <SingleButton icon="pencil-square-o" />
        <ButtonGroup icons={icons} />
        <SingleButton icon="print" />
      </div>
    );
  }
}

export default Actions;
