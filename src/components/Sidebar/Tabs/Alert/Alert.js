import React from "react";

const Alert = ({ name }) => {
  return (
    <div className="alert-header">
      <i className="fa fa-exclamation-circle fa-2x" aria-hidden="true" />
      <div className="alert-name">
        {name}
      </div>
    </div>
  );
};

export default Alert;
