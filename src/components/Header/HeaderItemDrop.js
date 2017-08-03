import React, { Component } from "react";
import Drop from "./Drop";

class HeaderItemDrop extends Component {
  render() {
    const { button, children, type } = this.props;
    return (
      <div className={`header-item item-${button}`}>
        <div className={`header-button button-${button}`}>
          <i className={`fa fa-${button} fa-lg`} aria-hidden="true" />
        </div>
        <div className="header-drop">
          <Drop type={type}>
            {children}
          </Drop>
        </div>
      </div>
    );
  }
}

export default HeaderItemDrop;
