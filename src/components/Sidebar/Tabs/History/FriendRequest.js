import React, { Component } from "react";
import Button from "../../../Extras/Button";

class FriendRequest extends Component {
  constructor(props) {
    super(props);
    this.state = { activeButton: 0 };
  }

  handleClick(activeButton) {
    this.setState({ activeButton });
  }

  render() {
    const { activeButton } = this.state;
    return (
      <div className="friendreq event-item">
        <div className="event-meta">Sent you a friend request!</div>
        <div className="friendreq-buttons">
          <Button
            color="#3498DB"
            handleClick={this.handleClick.bind(this, 1)}
            active={activeButton === 1}
          >
            ACCEPT
          </Button>
          <Button
            color="#E74C3C"
            handleClick={this.handleClick.bind(this, 2)}
            active={activeButton === 2}
          >
            REJECT
          </Button>
        </div>
      </div>
    );
  }
}

export default FriendRequest;
