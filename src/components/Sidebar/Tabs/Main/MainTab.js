import React, { Component } from "react";
import TabItem from "./TabItem";
import TabParent from "./TabParent";
import { Link } from "react-router-dom";

class MainTab extends Component {
  renderTabItems(arr, activePage) {
    return arr.map((tab, index) => {
      const { url, icon, title, children } = tab;
      if (children) {
        let regex;
        if (url === "/mailbox") {
          regex = /^(\/mailbox)/;
        }
        if (url === "/blog") {
          regex = /^(\/blog)/;
        }
        return (
          <TabParent
            key={url}
            icon={icon}
            title={title}
            active={regex.test(activePage)}
          >
            {this.renderTabItems(children, activePage)}
          </TabParent>
        );
      }
      return (
        <Link to={url} key={url}>
          <TabItem icon={icon} title={title} active={activePage === url} />
        </Link>
      );
    });
  }

  render() {
    const { activePage } = this.props;
    const pages = [
      { icon: "tachometer", title: "Dashboard", url: "/dashboard" },
      {
        icon: "envelope-o",
        title: "Mailbox",
        url: "/mailbox",
        children: [
          { icon: "inbox", title: "Inbox", url: "/mailbox/inbox" },
          { icon: "envelope-open-o", title: "Mail", url: "/mailbox/mail" },
          { icon: "pencil-square-o", title: "Compose", url: "/mailbox/compose" }
        ]
      },
      { icon: "picture-o", title: "Gallery", url: "/gallery" },
      { icon: "share-alt", title: "Social", url: "/social" },
      {
        icon: "newspaper-o",
        title: "Blog",
        url: "/blog",
        children: [
          { icon: "server", title: "Posts", url: "/blog/posts" },
          { icon: "file-text-o", title: "Single Post", url: "/blog/post" }
        ]
      }
    ];
    return (
      <div className="tab tab-main">
        <div className="tab-pages">
          <div className="tab-title">PAGES</div>
          {this.renderTabItems(pages, activePage)}
        </div>
      </div>
    );
  }
}

export default MainTab;
