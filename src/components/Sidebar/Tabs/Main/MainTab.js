import React, { Component } from "react";
import TabItem from "./TabItem";
import TabParent from "./TabParent";
import { Link } from "react-router-dom";

class MainTab extends Component {
  render() {
    const { page } = this.props;
    return (
      <div className="tab tab-main">
        <div className="tab-pages">
          <div className="tab-title">PAGES</div>
          <TabParent
            icon="envelope-o"
            title="Mailbox"
            active={page <= 2 && page >= 0}
            notifs="4"
          >
            <Link to="/adminui/mailbox/inbox">
              <TabItem icon="inbox" title="Inbox" active={page === 0} />
            </Link>
            <Link to="/adminui/mailbox/mail">
              <TabItem
                icon="envelope-open-o"
                title="Mail"
                active={page === 1}
              />
            </Link>
            <Link to="/adminui/mailbox/compose">
              <TabItem
                icon="pencil-square-o"
                title="Compose"
                active={page === 2}
              />
            </Link>
          </TabParent>
          <Link to="/adminui/gallery">
            <TabItem icon="picture-o" title="Gallery" active={page === 3} />
          </Link>
          <Link to="/adminui/social">
            <TabItem icon="share-alt" title="Social" active={page === 4} />
          </Link>
          <TabParent
            icon="newspaper-o"
            title="Blog"
            active={page <= 6 && page >= 5}
            notifs="2"
          >
            <Link to="/adminui/blog/posts">
              <TabItem icon="server" title="Posts" active={page === 5} />
            </Link>
            <Link to="/adminui/blog/post">
              <TabItem
                icon="file-text-o"
                title="Single Post"
                active={page === 6}
              />
            </Link>
          </TabParent>
        </div>
      </div>
    );
  }
}

export default MainTab;
