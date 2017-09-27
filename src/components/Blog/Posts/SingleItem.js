import React from "react";
import Panel from "../../Shared/Panel";
import PostMeta from "../PostMeta";

const SingleItem = ({ data }) => {
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
  const imageUrl = `https://images.unsplash.com/photo-${image}?dpr=1&auto=compress,format&fit=crop&w=1350&h=&q=80&cs=tinysrgb&crop=`;
  return (
    <Panel>
      <div className="post-image">
        <img src={imageUrl} alt="postimage" />
      </div>
      <div className="post-main">
        <div className="post-title">{title}</div>
        <PostMeta author={author} date={date} readTime={readTime} />
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

export default SingleItem;
