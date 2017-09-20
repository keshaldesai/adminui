import React, { Component } from "react";

class TextArea extends Component {
  render() {
    const { placeholder, height } = this.props;
    return (
      <div className="soc-area">
        <textarea
          placeholder={placeholder}
          maxLength={500}
          style={{ minHeight: height }}
        />
      </div>
    );
  }
}

export default TextArea;
