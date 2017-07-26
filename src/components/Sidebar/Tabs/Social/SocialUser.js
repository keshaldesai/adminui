import React from "react";

const SocialUser = ({ name, picture }) => {
  return (
    <div className="social-user" key={name}>
      <img src={picture} alt="thumbnail" />
      <div className="social-name">
        {name}
      </div>
    </div>
  );
};

export default SocialUser;
