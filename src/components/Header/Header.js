import React, { Component } from "react";
import HeaderItem from "./HeaderItem";
import HeaderItemDrop from "./HeaderItemDrop";
import Notifications from "./Notifications";
import Feed from "./Feed";

class Header extends Component {
  render() {
    return (
      <div className="header flex-row">
        <span onClick={this.props.handleClick}>
          <HeaderItem button="bars" />
        </span>
        <div className="logo flex-row">
          <i className="fa fa-pied-piper fa-2x" aria-hidden="true" />
          <span>My Business</span>
        </div>
        <div className="settings flex-row">
          <HeaderItem button="circle" />
          <HeaderItem button="user" />
          <HeaderItem button="envelope" />
          <HeaderItemDrop button="bullhorn" type="notif">
            <Notifications />
          </HeaderItemDrop>
          <HeaderItemDrop button="rss" type="feed">
            <Feed />
          </HeaderItemDrop>
        </div>
        <HeaderItem button="power-off" />
      </div>
    );
  }
}

export default Header;
