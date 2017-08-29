import React, { Component } from "react";
import Actions from "./Compose/Actions";
import Form from "./Compose/Form";
import CompEditor from "./Compose/CompEditor";
import Options from "./Compose/Options";

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
