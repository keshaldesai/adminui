import React from "react";

const Icon = ({ name, color }) => {
  return (
    <div className={`posts-social-icon posts-${name}`}>
      <i className={`fa fa-${name} fa-lg`} aria-hidden="true" />
    </div>
  );
};

export default Icon;
