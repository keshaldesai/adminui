import React, { Component } from "react";
import SingleEmail from "./SingleEmail";

class Emails extends Component {
  render() {
    const { users } = this.props;
    if (!users) {
      return <div />;
    }
    const emailUsers = users.slice(1, 11);
    return (
      <div className="in-emails">
        {emailUsers.map((user, index) => {
          return <SingleEmail user={user} key={index} index={index} />;
        })}
      </div>
    );
  }
}

export default Emails;
