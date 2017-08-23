import React from "react";
import UserIcon from "../../../Shared/UserIcon";

const SocialUser = ({ name, picture, color }) => {
  return (
    <div className="social-user flex-row">
      <UserIcon picture={picture} color={color} width="30px" />
      <div className="social-name">
        {name}
      </div>
    </div>
  );
};

export default SocialUser;
