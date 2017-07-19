import React, { Component } from "react";
import TabItem from "../TabItem";
import { Link } from "react-router-dom";

class MainTab extends Component {
  render() {
    const { activePage } = this.props;
    const pages = [
      { icon: "tachometer", title: "Dashboard", key: "dashboard" },
      { icon: "envelope-o", title: "Mailbox", key: "mailbox" },
      { icon: "picture-o", title: "Gallery", key: "gallery" },
      { icon: "share-alt", title: "Social", key: "social" },
      { icon: "newspaper-o", title: "Blog", key: "blog" }
    ];
    return (
      <div className="tab tab-main">
        <div className="tab-pages">
          <div className="tab-title">PAGES</div>
          {pages.map((page, index) => {
            const { key, icon, title } = page;
            return (
              <Link to={`/${key}`} key={key}>
                <TabItem
                  icon={icon}
                  title={title}
                  active={activePage === key}
                />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MainTab;
