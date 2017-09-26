import React, { Component } from "react";
import HeaderItem from "./HeaderItem";
import HeaderItemDrop from "./HeaderItemDrop";
import Notifications from "./Notifications";
import Feed from "./Feed";
import { Link } from "react-router-dom";

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
          <Link to="/social">
            <HeaderItem button="user" />
          </Link>
          <Link to="/mailbox/inbox">
            <HeaderItem button="envelope" />
          </Link>
          <HeaderItemDrop button="bullhorn" type="notif">
            <Notifications />
          </HeaderItemDrop>
          <HeaderItemDrop button="rss" type="feed">
            <Feed />
          </HeaderItemDrop>
        </div>
        <a href="https://google.com">
          <HeaderItem button="power-off" />
        </a>
      </div>
    );
  }
}

export default Header;
