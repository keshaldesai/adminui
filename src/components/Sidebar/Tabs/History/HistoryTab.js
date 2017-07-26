import React, { Component } from "react";
import HistoryEvent from "./HistoryEvent";

class HistoryTab extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="tab history">
        <HistoryEvent date="Jul 26, 2017" comp="Example" user={users[0]} />
        <HistoryEvent date="Jul 25, 2017" comp="Other" user={users[1]} />
        <HistoryEvent date="Jul 10, 2017" comp="Another" user={users[2]} />
      </div>
    );
  }
}

export default HistoryTab;
