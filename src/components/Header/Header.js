import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <i className="fa fa-pied-piper fa-2x" aria-hidden="true" />
          <span>My Business</span>
        </div>
        <div className="settings">
          <span className="color-settings">
            <i className="fa fa-circle fa-lg" aria-hidden="true" />
          </span>
          <span className="gen-settings">
            <i className="fa fa-user fa-lg" aria-hidden="true" />
            <i className="fa fa-cog fa-lg" aria-hidden="true" />
          </span>
          <span className="mail-quickicon">
            <i className="fa fa-envelope fa-lg" aria-hidden="true" />
          </span>
          <span className="alert-quickicon">
            <i className="fa fa-bullhorn fa-lg" aria-hidden="true" />
          </span>
          <span className="feed-quickicon">
            <i className="fa fa-rss fa-lg" aria-hidden="true" />
          </span>
          <span className="logout">
            <i className="fa fa-power-off fa-lg" aria-hidden="true" />
          </span>
        </div>
      </div>
    );
  }
}

export default Header;
