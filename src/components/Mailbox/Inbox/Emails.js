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
      <div className="inbox-emails">
        {emailUsers.map(user => {
          return <SingleEmail user={user} key={user.name} />;
        })}
      </div>
    );
  }
}

export default Emails;
