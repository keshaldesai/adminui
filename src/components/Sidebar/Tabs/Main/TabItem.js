import React from "react";
import TabChild from "./TabChild";

function TabItem({ icon, title, active, children }) {
  const activeClass = active ? " tab-item-active" : "";
  const subMenu = children ? <TabChild items={children} /> : "";
  return (
    <div className={"tab-item" + activeClass}>
      <div className="tab-item-header">
        <i className={`fa fa-${icon}`} aria-hidden="true" />
        <div className="tab-item-title">
          {title}
        </div>
      </div>
      {subMenu}
    </div>
  );
}

export default TabItem;
