import React, { Component } from "react";

class TextArea extends Component {
  render() {
    return (
      <div className="soc-area">
        <textarea placeholder="What's on your mind?" maxLength={500} />
      </div>
    );
  }
}

export default TextArea;
