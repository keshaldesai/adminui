import React, { Component } from "react";

class TabParent extends Component {
  render() {
    const { children, title, icon, active } = this.props;
    const activeClass = active ? " tab-item-active" : "";
    return (
      <div className={"tab-item" + activeClass}>
        <div className="tab-item-header">
          <i className={`fa fa-${icon}`} aria-hidden="true" />
          <div className="tab-item-title">
            {title}
          </div>
          <i className="fa fa-caret-left" aria-hidden="true" />
        </div>
        <div className="tab-item-children">
          {children}
        </div>
      </div>
    );
  }
}

export default TabParent;
