import React from "react";
import SingleButton from "./SingleButton";

const ButtonGroup = ({ icons, active }) => {
  const lastIndex = icons.length - 1;
  return (
    <span className="button-group">
      {icons.map((icon, index) => {
        switch (index) {
          case 0:
            return <SingleButton icon={icon} key={icon} left={true} />;
          case lastIndex:
            return <SingleButton icon={icon} key={icon} right={true} />;
          default:
            return <SingleButton icon={icon} key={icon} center={true} />;
        }
      })}
    </span>
  );
};

export default ButtonGroup;
