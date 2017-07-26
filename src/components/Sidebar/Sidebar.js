import React, { Component } from "react";
import User from "./User";
import TabMenu from "./TabMenu";
import MainTab from "./Tabs/Main/MainTab";
import SocialTab from "./Tabs/Social/SocialTab";
import StatisticsTab from "./Tabs/Statistics/StatisticsTab";
import HistoryTab from "./Tabs/History/HistoryTab";
import AlertTab from "./Tabs/AlertTab";
import axios from "axios";
import { CSSTransitionGroup } from "react-transition-group";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      activeTab: 3,
      users: null
    };
  }

  componentWillMount() {
    axios
      .get("https://randomuser.me/api/?inc=name,picture&results=15&nat=us")
      .then(response => {
        const { results } = response.data;
        const users = results.map(user => {
          const name = `${capitalize(user.name.first)} ${capitalize(
            user.name.last
          )}`;
          return { name, picture: user.picture.thumbnail };
        });
        this.setState({ users });
      });
  }

  handleClick(index) {
    this.setState({ activeTab: index });
  }

  renderTab() {
    const { activeTab, users } = this.state;
    const { match } = this.props;
    if (!users || users.length !== 15) {
      return;
    }
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
            <SocialTab users={users.slice(1)} />
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
            <HistoryTab users={users.slice(1, 4)} />
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
    const { activeTab, users } = this.state;
    const user = users
      ? users[0]
      : {
          name: "John Smith",
          picture: "http://via.placeholder.com/35/5e6d70/ffffff?text=User"
        };
    return (
      <div className="sidebar">
        <User user={user} />
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

function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export default Sidebar;
