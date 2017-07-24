import React, { Component } from "react";
import User from "./User";
import TabMenu from "./TabMenu";
import MainTab from "./Tabs/Main/MainTab";
import SocialTab from "./Tabs/Social/SocialTab";
import StatisticsTab from "./Tabs/StatisticsTab";
import HistoryTab from "./Tabs/HistoryTab";
import AlertTab from "./Tabs/AlertTab";
import axios from "axios";
import { CSSTransitionGroup } from "react-transition-group";

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
        return (
          <div key={0}>
            <MainTab activePage={match.url} />
          </div>
        );
      case 1:
        return (
          <div key={1}>
            <SocialTab users={users} />
          </div>
        );
      case 2:
        return (
          <div key={2}>
            <StatisticsTab />
          </div>
        );
      case 3:
        return (
          <div key={3}>
            <HistoryTab />
          </div>
        );
      case 4:
        return (
          <div key={4}>
            <AlertTab />
          </div>
        );
      default:
        return <div key={5} />;
    }
  }

  render() {
    const { activeTab } = this.state;
    return (
      <div className="sidebar">
        <User />
        <TabMenu activeTab={activeTab} handleClick={this.handleClick} />
        <CSSTransitionGroup
          transitionName="tab-transition"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.renderTab()}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Sidebar;
