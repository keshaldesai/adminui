import React, { Component } from "react";
import AttachItem from "./AttachItem";

class Attachments extends Component {
  render() {
    return (
      <div className="mb-block">
        <b>Attachments </b>
        <span className="attach-size">(3 files, 1.2 MB)</span>
        <AttachItem icon="picture-o" fileName="poster.jpeg" fileSize="769 KB" />
        <AttachItem icon="picture-o" fileName="chart.png" fileSize="160 KB" />
        <AttachItem icon="html5" fileName="page.html" fileSize="271 KB" />
      </div>
    );
  }
}

export default Attachments;
