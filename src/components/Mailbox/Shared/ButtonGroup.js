import React from "react";
import SingleButton from "./SingleButton";

const ButtonGroup = ({ icons, active, group }) => {
  return (
    <span className={`button-group ${group}`}>
      {icons.map(icon => {
        return <SingleButton icon={icon} />;
      })}
    </span>
  );
};

export default ButtonGroup;
