import React from "react";
import SocialUser from "./SocialUser";

const SocialGroup = ({ type, users, color }) => {
  return (
    <div className={`social-${type} social-group`}>
      {users.map(user => {
        const { name, picture } = user;
        return (
          <SocialUser name={name} picture={picture} key={name} color={color} />
        );
      })}
    </div>
  );
};

export default SocialGroup;
