import React, { Component } from "react";
import Actions from "./Compose/Actions";
import Form from "./Compose/Form";
import Editor from "./Compose/Editor";
import Options from "./Compose/Options";

class Compose extends Component {
  render() {
    return (
      <div className="main compose">
        <Actions />
        <Form />
        <Editor />
        <Options />
      </div>
    );
  }
}

export default Compose;
