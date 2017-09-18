import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ active: !this.state.active });
  }
  render() {
    const { title, date, likes, url } = this.props.info;
    const { active } = this.state;
    const activeStyle = active
      ? { backgroundColor: "#ff0000", borderColor: "#ff0000", color: "#ffffff" }
      : {};
    const newLikes = active ? likes + 1 : likes;
    return (
      <div className="card">
        <img alt="cardimage" src={url} />
        <div className="card-title">{title}</div>
        <div className="card-date">{date}</div>
        <div
          className="card-likes"
          onClick={this.handleClick}
          style={activeStyle}
        >
          <i className="fa fa-heart" aria-hidden="true" />
          {" " + newLikes}
        </div>
      </div>
    );
  }
}

export default Card;
