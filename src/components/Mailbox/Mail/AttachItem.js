import React from "react";

const AttachItem = ({ icon, fileName, fileSize }) => {
  return (
    <div className="attach-file flex-row">
      <i className={"fa fa-" + icon} aria-hidden="true" />&nbsp;
      <b>{fileName}</b>&nbsp;
      <span className="attach-size">({fileSize})</span>
      <span className="attach-download">Download</span>
    </div>
  );
};

export default AttachItem;
