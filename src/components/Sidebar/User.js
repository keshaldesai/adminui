import React from "react";
import UserIcon from "../Shared/UserIcon";

function User({ user }) {
  const { name, picture } = user;
  return (
    <div className="user">
      <UserIcon picture={picture} color="#bdd4de" width="40px" />
      <div className="user-name">
        {name}
      </div>
    </div>
  );
}

export default User;
