import React from "react";

const SingleButton = ({ icon, left, right, center }) => {
  let radius = "20px";
  let width = "2px";
  if (left) {
    radius = "20px 0px 0px 20px";
    width = "2px 1px 2px 2px";
  }
  if (right) {
    radius = "0px 20px 20px 0px";
    width = "2px 2px 2px 1px";
  }
  if (center) {
    radius = "0px";
    width = "2px 1px 2px 1px";
  }
  return (
    <span
      className={`mb-button button-${icon}`}
      style={{ borderRadius: radius, borderWidth: width }}
    >
      <i className={"fa fa-" + icon} aria-hidden="true" />
    </span>
  );
};

export default SingleButton;
