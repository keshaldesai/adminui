import React from "react";

function User({ user }) {
  const { name, picture } = user;
  return (
    <div className="user">
      <img src={picture.thumbnail} alt="user icon" />
      <div className="user-name">
        {`${capitalize(name.first)} ${capitalize(name.last)}`}
      </div>
    </div>
  );
}

function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export default User;
