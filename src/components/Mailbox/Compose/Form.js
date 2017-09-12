import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="comp-form">
        <div className="comp-header">To</div>
        <input type="text" placeholder="Example: john@domain.com" />
        <div className="comp-header">CC</div>
        <input type="text" />
        <div className="comp-header">BCC</div>
        <input type="text" />
        <div className="comp-header">Subject</div>
        <input type="text" placeholder="Subject title here" />
      </div>
    );
  }
}

export default Form;
