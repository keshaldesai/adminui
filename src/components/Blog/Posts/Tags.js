import React from "react";

const Tags = ({ tagGroup }) => {
  return (
    <div className="tags">
      {tagGroup.map(tag => {
        return (
          <div className="tag" key={tag}>
            {tag}
          </div>
        );
      })}
    </div>
  );
};

export default Tags;
