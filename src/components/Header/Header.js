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
          <div className="color-settings header-item">
            <i className="fa fa-circle fa-lg" aria-hidden="true" />
          </div>
          <div className="gen-settings header-item">
            <i className="fa fa-user fa-lg" aria-hidden="true" />
            <i className="fa fa-cog fa-lg" aria-hidden="true" />
          </div>
          <div className="mail-quickicon header-item">
            <i className="fa fa-envelope fa-lg" aria-hidden="true" />
          </div>
          <div className="alert-quickicon header-item">
            <i className="fa fa-bullhorn fa-lg" aria-hidden="true" />
          </div>
          <div className="feed-quickicon header-item">
            <i className="fa fa-rss fa-lg" aria-hidden="true" />
          </div>
          <div className="logout header-item">
            <i className="fa fa-power-off fa-lg" aria-hidden="true" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
