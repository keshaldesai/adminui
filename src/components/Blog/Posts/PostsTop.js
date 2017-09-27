import React from "react";

const PostsTop = ({ title, children }) => {
  return (
    <div className="posts-panel-inner posts-top">
      <div className="posts-top-title">{title}</div>
      {children}
    </div>
  );
};

export default PostsTop;
