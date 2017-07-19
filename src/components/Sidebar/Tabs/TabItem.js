import React from "react";

function TabItem({ icon, title, alerts, subItems, active }) {
  const activeClass = active ? " tab-item-active" : "";
  return (
    <div className={"tab-item" + activeClass}>
      <i className={`fa fa-${icon}`} aria-hidden="true" />
      <div className="tab-item-title">
        {title}
      </div>
      <div className="tab-item-alert">
        {alerts}
      </div>
    </div>
  );
}

export default TabItem;
