import React from "react";

const Panel = ({ color, children }) => {
  return (
    <div className="sh-panel" style={{ border: `2px solid ${color}` }}>
      {children}
    </div>
  );
};

export default Panel;
