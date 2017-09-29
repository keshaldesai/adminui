import React, { Component } from "react";
import { Link } from "react-router-dom";

class Reply extends Component {
  render() {
    return (
      <div className="mail-reply">
        <Link to="/mailbox/compose">
          <div className="reply-box">Click here to reply</div>
        </Link>
      </div>
    );
  }
}

export default Reply;
