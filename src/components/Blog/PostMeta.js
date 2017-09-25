import React from "react";

const PostMeta = ({ author, date, readTime }) => {
  return (
    <div className="post-meta flex-row">
      <div className="post-by">{`by ${author} / ${date}`}</div>
      <div className="post-time">
        <i className="fa fa-clock-o" aria-hidden="true" />
        {` ${readTime} minutes read`}
      </div>
    </div>
  );
};

export default PostMeta;
