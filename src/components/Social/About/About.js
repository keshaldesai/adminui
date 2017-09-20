import React, { Component } from "react";
import Me from "./Me";
import MyDesc from "./MyDesc";

class About extends Component {
  render() {
    return (
      <div className="soc-about">
        <div className="soc-about-overlay">
          <MyDesc />
          <Me user={this.props.user} />
        </div>
      </div>
    );
  }
}

export default About;
