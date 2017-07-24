import React, { Component } from "react";
import User from "./User";
import TabMenu from "./TabMenu";
import MainTab from "./Tabs/Main/MainTab";
import SocialTab from "./Tabs/Social/SocialTab";
import StatisticsTab from "./Tabs/StatisticsTab";
import HistoryTab from "./Tabs/HistoryTab";
import AlertTab from "./Tabs/AlertTab";
import axios from "axios";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      activeTab: 0,
      users: null
    };
  }

  componentWillMount() {
    axios
      .get(
        "https://randomuser.me/api/?inc=name,picture,login&results=14&nat=us"
      )
      .then(data =>
        this.setState({
          users: data.data.results
        })
      );
  }

  handleClick(index) {
    this.setState({ activeTab: index });
  }

  renderTab() {
    const { activeTab, users } = this.state;
    const { match } = this.props;
    switch (activeTab) {
      case 0:
        return <MainTab activePage={match.url} />;
      case 1:
        return <SocialTab users={users} />;
      case 2:
        return <StatisticsTab />;
      case 3:
        return <HistoryTab />;
      case 4:
        return <AlertTab />;
      default:
        return <div />;
    }
  }

  render() {
    const { activeTab } = this.state;
    return (
      <div className="sidebar">
        <User />
        <TabMenu activeTab={activeTab} handleClick={this.handleClick} />
        {this.renderTab()}
      </div>
    );
  }
}

export default Sidebar;
