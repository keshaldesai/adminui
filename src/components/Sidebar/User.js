import React from "react";

function User({ user }) {
  const { name, picture } = user;
  return (
    <div className="user">
      <img src={picture} alt="user icon" />
      <div className="user-name">
        {name}
      </div>
    </div>
  );
}

export default User;
