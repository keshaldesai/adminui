import React, { Component } from "react";
import HistoryEvent from "./HistoryEvent";
import FriendRequest from "./FriendRequest";

class HistoryTab extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="tab history">
        <HistoryEvent date="Jul 26, 2017" user={users[0]}>
          <FriendRequest />
        </HistoryEvent>
        <HistoryEvent date="Jul 25, 2017" user={users[1]} />
        <HistoryEvent date="Jul 10, 2017" user={users[2]} />
      </div>
    );
  }
}

export default HistoryTab;
