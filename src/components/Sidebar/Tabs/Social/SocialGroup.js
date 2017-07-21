import React from "react";

const SocialGroup = ({ type, users }) => {
  return (
    <div className={`social-${type} social-group`}>
      {users.map(user => {
        const { name, picture, login } = user;
        return (
          <div className="social-user" key={login.username}>
            <img src={picture.thumbnail} alt="thumbnail" />
            {`${name.first} ${name.last}`}
          </div>
        );
      })}
    </div>
  );
};

export default SocialGroup;
