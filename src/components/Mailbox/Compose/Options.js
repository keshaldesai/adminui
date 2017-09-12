import React, { Component } from "react";

class Options extends Component {
  render() {
    return (
      <div className="comp-options">
        <span className="button-group">
          <span
            className="mb-button button-disc"
            style={{
              borderRadius: "20px 0px 0px 20px",
              borderWidth: "2px 1px 2px 2px"
            }}
          >
            DISCARD
          </span>
          <span
            className="mb-button button-save"
            style={{
              borderRadius: "0px 20px 20px 0px",
              borderWidth: "2px 2px 2px 1px"
            }}
          >
            SAVE
          </span>
        </span>
        <span
          className="mb-button button-send"
          style={{
            borderRadius: "20px",
            borderWidth: "2px"
          }}
        >
          SEND
        </span>
      </div>
    );
  }
}

export default Options;
