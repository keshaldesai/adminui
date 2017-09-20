import React from "react";
import Tab from "./Tab";

function TabMenu({ activeTab, handleClick }) {
  const tabs = ["home", "comments", "list", "bell"];
  return (
    <div className="tabmenu flex-row">
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
