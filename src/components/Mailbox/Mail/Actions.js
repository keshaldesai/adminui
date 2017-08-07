import React, { Component } from "react";
import SingleButton from "../Shared/SingleButton";
import ButtonGroup from "../Shared/ButtonGroup";

class Actions extends Component {
  render() {
    const mailIcons = ["reply", "reply-all", "share"];
    const actionIcons = ["exclamation", "trash-o"];
    return (
      <div className="mb-block mail-actions">
        <SingleButton icon="arrow-left" />
        <SingleButton icon="pencil-square-o" />
        <ButtonGroup icons={mailIcons} group="mb-group-mail" />
        <ButtonGroup icons={actionIcons} group="mb-group-actions" />
        <SingleButton icon="print" />
      </div>
    );
  }
}

export default Actions;
