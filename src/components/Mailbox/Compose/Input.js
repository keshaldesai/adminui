import React from "react";

const Input = ({ value, placeholder, name, handleChange }) => {
  return (
    <div className="comp-form">
      <span className="comp-header">{name}</span>
      <input
        type="text"
        placeholder={placeholder || ""}
        name={name.toLowerCase()}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
