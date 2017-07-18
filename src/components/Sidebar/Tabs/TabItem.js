import React from "react";

function TabItem({ icon, title, alerts, subItems }) {
  return (
    <div className="tab-item">
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
