import React from "react";

const Label = ({ color, circle, children }) => {
  const radius = circle ? "20px" : "4px";
  return (
    <span
      className="sh-label"
      style={{ backgroundColor: color, borderRadius: radius }}
    >
      {children}
    </span>
  );
};

export default Label;
