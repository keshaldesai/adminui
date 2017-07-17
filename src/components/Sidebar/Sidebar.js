import React, { Component } from "react";
import User from "./User";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <User />
      </div>
    );
  }
}

export default Sidebar;
