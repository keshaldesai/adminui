import React from "react";

const UserIcon = ({ picture, width, color }) => {
  return (
    <div className="sh-icon">
      <img
        src={picture}
        style={{ borderColor: color, width }}
        alt="user icon"
      />
    </div>
  );
};

export default UserIcon;
