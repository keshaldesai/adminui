import React, { Component } from "react";
import SocialUser from "../Social/SocialUser";
import HistoryEvent from "./HistoryEvent";

class HistoryTab extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="tab history">
        <HistoryEvent date="Jul 26, 2017" comp="Example">
          <SocialUser name={users[0].name} picture={users[0].picture} />
        </HistoryEvent>
        <HistoryEvent date="Jul 25, 2017" comp="Other">
          <SocialUser name={users[1].name} picture={users[1].picture} />
        </HistoryEvent>
        <HistoryEvent date="Jul 10, 2017" comp="Another">
          <SocialUser name={users[2].name} picture={users[2].picture} />
        </HistoryEvent>
      </div>
    );
  }
}

export default HistoryTab;
