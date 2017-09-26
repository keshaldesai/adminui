import React, { Component } from "react";
import User from "./User";
import TabMenu from "./TabMenu";
import MainTab from "./Tabs/Main/MainTab";
import SocialTab from "./Tabs/Social/SocialTab";
import HistoryTab from "./Tabs/History/HistoryTab";
import AlertTab from "./Tabs/Alert/AlertTab";
import { CSSTransitionGroup } from "react-transition-group";

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

  renderTab() {
    const { activeTab } = this.state;
    const { match, users } = this.props;
    if (!users || users.length !== 15) {
      return;
    }
    switch (activeTab) {
      case 0:
        return <MainTab activePage={match.url} key={0} />;
      case 1:
        return <SocialTab users={users.slice(1)} key={1} />;
      case 2:
        return <HistoryTab users={users.slice(1, 4)} key={2} />;
      case 3:
        return <AlertTab key={3} />;
      default:
        return <div key={4} />;
    }
  }

  render() {
    const { activeTab } = this.state;
    const { users, show, handleClose } = this.props;
    const user = users[0];
    const style = show ? { transform: "translate(350px)" } : {};
    const exitStyle = show ? { opacity: 1, visibility: "visible" } : {};
    return (
      <div className="sidebar" style={style}>
        <div className="sidebar-close" style={exitStyle} onClick={handleClose}>
          <i className="fa fa-times-circle fa-lg" aria-hidden="true" />
        </div>
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

export default Sidebar;
