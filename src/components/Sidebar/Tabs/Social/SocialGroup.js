import React from "react";

const SocialGroup = ({ type, users }) => {
  return (
    <div className={`social-${type}`}>
      {users.map(user => {
        return (
          <div className="social-user">
            {user}
          </div>
        );
      })}
    </div>
  );
};

export default SocialGroup;
