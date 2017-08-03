import React, { Component } from "react";
import DropItem from "./DropItem";

class Feed extends Component {
  render() {
    const feedArr = [
      {
        time: "an hour ago",
        type: "&johndoe starred joyent/node",
        snippet: "evented I/O for v8 javascript"
      },
      {
        time: "2 hours ago",
        type: "@jackie commented on issue #150",
        snippet: "Nice catch! I'll get this fixed soon. Meanwhile..."
      },
      {
        time: "8 hours ago",
        type: "@random forked facebook/react",
        snippet: "to random/react"
      },
      {
        time: "3 days ago",
        type: "@mario opened issue twbs/bootstrap#44",
        snippet: "Request: Support RTL version"
      }
    ];
    return (
      <div className="drop-container">
        <div className="drop-title">YOUR NEWS FEED</div>
        <div className="feed-group">
          <DropItem item={feedArr[0]}>
            <i className="fa fa-star fa-lg" aria-hidden="true" />
          </DropItem>
          <DropItem item={feedArr[1]}>
            <i className="fa fa-comments fa-lg" aria-hidden="true" />
          </DropItem>
          <DropItem item={feedArr[2]}>
            <i className="fa fa-code-fork fa-lg" aria-hidden="true" />
          </DropItem>
          <DropItem item={feedArr[3]}>
            <i className="fa fa-exclamation-circle fa-lg" aria-hidden="true" />
          </DropItem>
        </div>
      </div>
    );
  }
}

export default Feed;
