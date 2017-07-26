import React from "react";

const Button = ({ children, color }) => {
  return (
    <div className="button" style={{ color, borderColor: color }}>
      {children}
    </div>
  );
};

export default Button;
