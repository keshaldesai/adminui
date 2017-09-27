import React from "react";

const BlogLink = ({ title, author, time }) => {
  return (
    <div className="trend-link">
      <div className="trend-link-title link">{title}</div>
      <div className="trend-link-meta">
        {`${time} - `}
        <span className="trend-link-author link">{author}</span>
      </div>
    </div>
  );
};

export default BlogLink;
