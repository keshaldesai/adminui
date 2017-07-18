import React from "react";

function Tab({ icon, active, index, handleClick }) {
  const isActive = active ? " tabmenu-active" : "";
  return (
    <div
      className={"tabmenu-box" + isActive}
      onClick={() => {
        handleClick(index);
      }}
    >
      <i className={"fa fa-" + icon} aria-hidden="true" />
    </div>
  );
}

export default Tab;
