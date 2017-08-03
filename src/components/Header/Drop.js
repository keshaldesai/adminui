import React, { Component } from "react";

class Drop extends Component {
  render() {
    const { type, children } = this.props;
    return (
      <div className={type}>
        <div className="drop-caret ">
          <i className="fa fa-caret-up fa-2x" aria-hidden="true" />
        </div>
        {children}
      </div>
    );
  }
}

export default Drop;
