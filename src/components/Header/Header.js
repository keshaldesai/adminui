import React, { Component } from "react";
import HeaderItem from "./HeaderItem";
import Notifications from "./Notifications";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <i className="fa fa-pied-piper fa-2x" aria-hidden="true" />
          <span>My Business</span>
        </div>
        <div className="settings">
          <HeaderItem button="circle" />
          <HeaderItem button="user" />
          <HeaderItem button="envelope" />
          <HeaderItem button="bullhorn">
            <Notifications />
          </HeaderItem>
          <HeaderItem button="rss" />
          <HeaderItem button="power-off" />
        </div>
      </div>
    );
  }
}

export default Header;
