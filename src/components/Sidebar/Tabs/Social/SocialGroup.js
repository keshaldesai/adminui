import React from "react";
import SocialUser from "./SocialUser";

const SocialGroup = ({ type, users }) => {
  return (
    <div className={`social-${type} social-group`}>
      {users.map(user => {
        return (
          <SocialUser name={user.name} picture={user.picture} key={user.name} />
        );
      })}
    </div>
  );
};

export default SocialGroup;
