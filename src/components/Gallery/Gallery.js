import React, { Component } from "react";
import CardGroup from "./CardGroup";

class Gallery extends Component {
  componentDidMount() {
    this.props.handleActive();
  }
  render() {
    return (
      <div className="gallery">
        <CardGroup />
      </div>
    );
  }
}

export default Gallery;
