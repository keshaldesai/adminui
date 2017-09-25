import React, { Component } from "react";

class FullImg extends Component {
  render() {
    const imageUrl = `https://images.unsplash.com/photo-${this.props
      .image}?dpr=1&auto=compress,format&fit=crop&w=1350&h=&q=80&cs=tinysrgb&crop=`;
    return (
      <div className="full-img">
        <div className="full-img-cont">
          <img src={imageUrl} alt="fullimage" />
        </div>
        <div className="full-img-close" onClick={this.props.handleMagnify}>
          <i className="fa fa-times fa-2x" aria-hidden="true" />
        </div>
      </div>
    );
  }
}

export default FullImg;
