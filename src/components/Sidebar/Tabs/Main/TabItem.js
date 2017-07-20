import React from "react";

function TabItem({ icon, title, active, children }) {
  const activeClass = active ? " tab-item-active" : "";
  return (
    <div className={"tab-item" + activeClass}>
      <div className="tab-item-header">
        <i className={`fa fa-${icon}`} aria-hidden="true" />
        <div className="tab-item-title">
          {title}
        </div>
      </div>
    </div>
  );
}

export default TabItem;
