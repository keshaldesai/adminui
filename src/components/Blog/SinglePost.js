import React from "react";
import Panel from "../Shared/Panel";

const SinglePost = ({ data }) => {
  const {
    image,
    author,
    date,
    readTime,
    title,
    content,
    tag,
    comments,
    shares,
    likes
  } = data;
  return (
    <Panel>
      <div className="post-image">
        <img src={image} alt="postimage" />
      </div>
      <div className="post-main">
        <div className="post-title">{title}</div>
        <div className="post-meta flex-row">
          <div className="post-by">{`by ${author} / ${date}`}</div>
          <div className="post-time">
            <i className="fa fa-clock-o" aria-hidden="true" />
            {` ${readTime} minutes read`}
          </div>
        </div>
        <div className="post-content">{content}</div>
      </div>
      <div className="post-extra flex-row">
        <div className="post-tags">{`#${tag}`}</div>
        <div className="post-social">
          <i className="fa fa-comments-o" aria-hidden="true" />
          {comments}
          <i className="fa fa-share-alt" aria-hidden="true" />
          {shares}
          <span className="post-likes">
            <i className="fa fa-heart" aria-hidden="true" />
            {likes}
          </span>
        </div>
      </div>
    </Panel>
  );
};

export default SinglePost;
