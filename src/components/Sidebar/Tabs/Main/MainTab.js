import React, { Component } from "react";
import TabItem from "../TabItem";

class MainTab extends Component {
  render() {
    return (
      <div className="tab tab-main">
        <div className="tab-pages">
          <div className="tab-title">PAGES</div>
          <TabItem icon="tachometer" title="Dashboard" />
          <TabItem icon="envelope-o" title="Mailbox" />
          <TabItem icon="picture-o" title="Gallery" />
          <TabItem icon="share-alt" title="Social" />
          <TabItem icon="newspaper-o" title="Blog" />
        </div>
      </div>
    );
  }
}

export default MainTab;
