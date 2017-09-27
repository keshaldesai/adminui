import React from "react";

const PostsTop = ({ children }) => {
  return (
    <div className="posts-panel-inner posts-top">
      <div className="posts-top-title">TRENDING POSTS</div>
      {children}
    </div>
  );
};

export default PostsTop;
