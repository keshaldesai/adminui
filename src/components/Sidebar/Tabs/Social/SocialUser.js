import React from "react";

const SocialUser = ({ name, picture }) => {
  return (
    <div className="social-user flex-row">
      <img src={picture} alt="thumbnail" />
      <div className="social-name">
        {name}
      </div>
    </div>
  );
};

export default SocialUser;
