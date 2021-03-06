import React, { Component } from "react";

class HeaderItem extends Component {
  render() {
    const { button } = this.props;
    return (
      <div className="header-item">
        <div className={`header-button button-${button}`}>
          <i className={`fa fa-${button} fa-lg`} aria-hidden="true" />
        </div>
      </div>
    );
  }
}

export default HeaderItem;
