import React from "react";

const SocialGroup = ({ type, users }) => {
  return (
    <div className={`social-${type} social-group`}>
      {users.map(user => {
        const { name, picture, login } = user;
        const fullName = `${capitalize(name.first)} ${capitalize(name.last)}`;
        return (
          <div className="social-user" key={login.username}>
            <img src={picture.thumbnail} alt="thumbnail" />
            <div className="social-name">
              {fullName}
            </div>
          </div>
        );
      })}
    </div>
  );
};

function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export default SocialGroup;
