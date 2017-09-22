import React from "react";
import UserIcon from "../../Shared/UserIcon";

const SocialUser = ({ user, location }) => {
  return (
    <div className="flex-row">
      <UserIcon picture={user.picture} width="50px" color="#ffffff" />
      <div className="soc-user-info">
        <div className="soc-user-name">{user.name}</div>
        <div className="soc-user-loc">{location}</div>
      </div>
    </div>
  );
};

export default SocialUser;
