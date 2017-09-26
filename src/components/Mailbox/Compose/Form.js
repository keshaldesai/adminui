import React, { Component } from "react";
import Input from "./Input";

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
    const { to, cc, bcc, subject } = this.state;
    return (
      <div>
        <Input
          value={to}
          handleChange={this.handleChange}
          name="To"
          placeholder="Example: john@domain.com"
        />
        <Input value={cc} handleChange={this.handleChange} name="CC" />
        <Input value={bcc} handleChange={this.handleChange} name="BCC" />
        <Input
          value={subject}
          handleChange={this.handleChange}
          name="Subject"
          placeholder="Subject title here"
        />
      </div>
    );
  }
}

export default Form;
