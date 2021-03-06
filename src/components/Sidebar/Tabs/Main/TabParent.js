import React, { Component } from "react";
import Label from "../../../Shared/Label";

class TabParent extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      show: false
    };
  }

  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    const { children, title, icon, active, notifs } = this.props;
    const { show } = this.state;
    const activeClass = active ? " tab-item-active" : "";
    const caretStyle = show
      ? { transform: "rotate(-90deg)" }
      : { transform: "none" };
    const childStyle = show ? { maxHeight: "250px" } : { maxHeight: "0px" };
    return (
      <div className={"tab-item" + activeClass}>
        <div className="tab-item-header flex-row" onClick={this.handleClick}>
          <i className={`fa fa-${icon}`} aria-hidden="true" />
          <div className="tab-item-title">
            {title}
          </div>
          <div className="tab-item-extra flex-row">
            <Label color="#e74c3c">
              {notifs}
            </Label>
            <div className="tab-item-open" style={caretStyle}>
              <i className="fa fa-caret-left fa-lg" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div className="tab-item-children" style={childStyle}>
          {children}
        </div>
      </div>
    );
  }
}

export default TabParent;
