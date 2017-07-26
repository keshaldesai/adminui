import React from "react";

const SocialGroup = ({ type, users }) => {
  return (
    <div className={`social-${type} social-group`}>
      {users.map(user => {
        const { name, picture } = user;
        return (
          <div className="social-user" key={name}>
            <img src={picture} alt="thumbnail" />
            <div className="social-name">
              {name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SocialGroup;
