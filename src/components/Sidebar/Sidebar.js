import React, { Component } from "react";
import User from "./User";
import TabMenu from "./TabMenu";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      activeTab: 0
    };
  }

  handleClick(index) {
    this.setState({ activeTab: index });
  }

  render() {
    const { activeTab } = this.state;
    return (
      <div className="sidebar">
        <User />
        <TabMenu activeTab={activeTab} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Sidebar;
