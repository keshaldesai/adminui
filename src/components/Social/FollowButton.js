import React, { Component } from "react";

class FollowButton extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ active: !this.state.active });
  }
  render() {
    const { activeColor } = this.props;
    const style = { borderColor: activeColor, backgroundColor: activeColor };
    if (this.state.active) {
      return (
        <span
          className="soc-follow-button"
          style={style}
          onClick={this.handleClick}
        >
          FOLLOWING
        </span>
      );
    }
    return (
      <span className="soc-follow-button" onClick={this.handleClick}>
        FOLLOW ME
      </span>
    );
  }
}

export default FollowButton;
