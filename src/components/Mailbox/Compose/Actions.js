import React, { Component } from "react";
import ButtonGroup from "../Shared/ButtonGroup";

class Actions extends Component {
  render() {
    const actionIcons = ["arrow-left", "times"];
    return (
      <div className="mb-block">
        <ButtonGroup icons={actionIcons} />
      </div>
    );
  }
}

export default Actions;
