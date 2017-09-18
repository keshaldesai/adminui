import React, { Component } from "react";
import About from "./About";
import New from "./New";
import SocialItem from "./SocialItem";

class Social extends Component {
  render() {
    return (
      <div className="social">
        <About />
        <New />
        <SocialItem />
      </div>
    );
  }
}

export default Social;
