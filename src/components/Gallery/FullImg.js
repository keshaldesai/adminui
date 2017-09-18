import React, { Component } from "react";

class FullImg extends Component {
  this;
  render() {
    return (
      <div className="full-img">
        <div className="full-img-cont">
          <img src={this.props.url} alt="fullimage" />
        </div>
        <div className="full-img-close" onClick={this.props.handleMagnify}>
          <i className="fa fa-times fa-2x" aria-hidden="true" />
        </div>
      </div>
    );
  }
}

export default FullImg;
