import React from "react";

const DropItem = ({ children, item }) => {
  const { time, type, snippet } = item;
  return (
    <div className="drop-one">
      <div className="drop-icon">
        {children}
      </div>
      <div className="drop-info">
        <div className="drop-time">
          {time}
        </div>
        <div className="drop-type">
          {type}
        </div>
        <div className="drop-snippet">
          {snippet}
        </div>
      </div>
    </div>
  );
};

export default DropItem;
