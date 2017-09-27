import React from "react";
import UserIcon from "../../Shared/UserIcon";

const Spotlight = ({ user }) => {
  return (
    <div className="spotlight flex-row">
      <UserIcon color="#efefef" picture={user.picture} width="50px" />
      <div className="spotlight-name">{user.name}</div>
    </div>
  );
};

export default Spotlight;
