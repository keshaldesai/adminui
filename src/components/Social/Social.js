import React, { Component } from "react";
import About from "./About/About";
import New from "./New/New";
import SocialItem from "./SocialItem/SocialItem";

class Social extends Component {
  render() {
    const { users } = this.props;
    if (!users) {
      return <div />;
    }
    const user = this.props.users[0];
    return (
      <div className="social">
        <About user={user} />
        <New />
        <SocialItem />
      </div>
    );
  }
}

export default Social;
