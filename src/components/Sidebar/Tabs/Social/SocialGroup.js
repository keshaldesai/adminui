import React from "react";

const SocialGroup = ({ type, users }) => {
  return (
    <div className={`social-${type} social-group`}>
      {users.map(user => {
        return (
          <div className="social-user" key={user.login.username}>
            {`${user.name.first} ${user.name.last}`}
          </div>
        );
      })}
    </div>
  );
};

export default SocialGroup;
