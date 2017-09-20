import React from "react";
import FollowButton from "./FollowButton";
import UserIcon from "../../Shared/UserIcon";

const Me = ({ user }) => {
  const { picture, name } = user;
  return (
    <div className="soc-me">
      <UserIcon picture={picture} color="#bdd4de" width="80px" />
      <div className="soc-myname">{name}</div>
      <div className="soc-myjob">Pediatrician, CT</div>
      <div className="soc-myfollow">
        <FollowButton activeColor="rgb(52, 152, 219)" />
      </div>
    </div>
  );
};

export default Me;
