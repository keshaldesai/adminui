import React, { Component } from "react";

class HistoryTab extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="tab history">
        <div className="history-event">
          <div className="social-user" key={users[0].name}>
            <img
              src={users[0].picture}
              alt="thumbnail"
              style={{ borderColor: "#00a388" }}
            />
            <div className="social-name">
              {users[0].name}
            </div>
          </div>
          <div className="history-date">Jul 10, 2017</div>
          <div className="history-comp">Example</div>
        </div>
        <div className="history-event">
          <div className="social-user" key={users[1].name}>
            <img
              src={users[1].picture}
              alt="thumbnail"
              style={{ borderColor: "#FFFF9D" }}
            />
            <div className="social-name">
              {users[1].name}
            </div>
          </div>
          <div className="history-date">Jul 10, 2017</div>
          <div className="history-comp">Example</div>
        </div>
        <div className="history-event">
          <div className="social-user" key={users[2].name}>
            <img
              src={users[2].picture}
              alt="thumbnail"
              style={{ borderColor: "#FF6138" }}
            />
            <div className="social-name">
              {users[2].name}
            </div>
          </div>
          <div className="history-date">Jul 10, 2017</div>
          <div className="history-comp">Example</div>
        </div>
      </div>
    );
  }
}

export default HistoryTab;
