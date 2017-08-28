import React from "react";

const Label = ({ color, circle }) => {
  const radius = circle ? "20px" : "4px";
  return (
    <span
      className="sh-label"
      style={{ backgroundColor: color, borderRadius: radius }}
    >
      Label
    </span>
  );
};

export default Label;
