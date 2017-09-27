import React from "react";

const Tags = ({ tagGroup }) => {
  return (
    <div className="tags">
      {tagGroup.map(tag => {
        return <div className="tag">{tag}</div>;
      })}
    </div>
  );
};

export default Tags;
