import React from "react";
import Tab from "./Tab";

function TabMenu({ activeTab, handleClick }) {
  const tabs = ["bars", "comments", "pie-chart", "list", "bell"];
  return (
    <div className="tabmenu">
      {tabs.map((tab, index) => {
        return (
          <Tab
            key={tab}
            icon={tab}
            active={activeTab === index}
            index={index}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
}

export default TabMenu;
