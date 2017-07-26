import React, { Component } from "react";

class HistoryTab extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="tab history">
        <div>
          <div className="social-user" key={users[0].name}>
            <img src={users[0].picture} alt="thumbnail" />
            <div className="social-name">
              {users[0].name}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HistoryTab;
