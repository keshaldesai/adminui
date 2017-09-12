import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to: "",
      cc: "",
      bcc: "",
      subject: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="comp-form">
        <div className="comp-header">To</div>
        <input
          type="text"
          placeholder="Example: john@domain.com"
          name="to"
          value={this.state.to}
          onChange={this.handleChange}
        />
        <div className="comp-header">CC</div>
        <input
          type="text"
          name="cc"
          value={this.state.cc}
          onChange={this.handleChange}
        />
        <div className="comp-header">BCC</div>
        <input
          type="text"
          name="bcc"
          value={this.state.bcc}
          onChange={this.handleChange}
        />
        <div className="comp-header">Subject</div>
        <input
          type="text"
          placeholder="Subject title here"
          name="subject"
          value={this.state.subject}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Form;
