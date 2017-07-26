import React, { Component } from "react";
import Button from "../../../Extras/Button";

class FriendRequest extends Component {
  render() {
    return (
      <div className="friendreq">
        Sent you a friend request!
        <div className="friendreq-buttons">
          <Button color="#3498DB">Accept</Button>
          <Button color="#E74C3C">Reject</Button>
        </div>
      </div>
    );
  }
}

export default FriendRequest;
