import React, { Component } from "react";

class Likes extends Component {
  constructor(props) {
    super(props);
    this.state = { userLiked: false, allLiked: 999 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ userLiked: !this.state.userLiked });
  }
  render() {
    const { userLiked, allLiked } = this.state;
    const activeColor = "rgb(230, 126, 34)";
    const likes = userLiked ? 1 + allLiked : allLiked;
    const textStyle = userLiked ? { color: activeColor } : {};
    const iconStyle = userLiked
      ? { borderColor: activeColor, backgroundColor: activeColor }
      : {};
    return (
      <div className="soc-my-likes flex-row" onClick={this.handleClick}>
        <i className="fa fa-heart" aria-hidden="true" style={iconStyle} />
        <div style={textStyle}>{likes + " likes"}</div>
      </div>
    );
  }
}

export default Likes;
