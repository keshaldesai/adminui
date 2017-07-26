import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false, active: false };
  }

  render() {
    const { children, color, handleClick, active } = this.props;
    const { hover } = this.state;
    const activeClass = {
      borderColor: color,
      backgroundColor: color,
      color: "white"
    };
    const normalClass = { borderColor: color, color: color };
    const style = hover || active ? activeClass : normalClass;
    return (
      <div
        className="button"
        style={style}
        onMouseOver={() => {
          this.setState({ hover: true });
        }}
        onMouseOut={() => {
          this.setState({ hover: false });
        }}
        onClick={handleClick}
      >
        {children}
      </div>
    );
  }
}

export default Button;
