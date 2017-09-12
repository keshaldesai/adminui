import React, { Component } from "react";
import Actions from "./Actions";
import Form from "./Form";
import CompEditor from "./CompEditor";
import Options from "./Options";

class Compose extends Component {
  render() {
    return (
      <div className="main compose">
        <Actions />
        <Form />
        <CompEditor />
        <Options />
      </div>
    );
  }
}

export default Compose;
