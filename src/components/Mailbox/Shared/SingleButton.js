import React from "react";

const SingleButton = ({ icon }) => {
  return (
    <span className={`mb-button button-${icon}`}>
      <i className={"fa fa-" + icon} aria-hidden="true" />
    </span>
  );
};

export default SingleButton;
