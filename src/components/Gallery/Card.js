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
    return (
      <div className="card">
        <img alt="cardimage" src={url} />
        <div className="card-title">{title}</div>
        <div className="card-date">{date}</div>
        <div
          className={"card-likes" + this.state.active ? " likes-active" : ""}
          onClick={this.handleClick}
        >
          <i className="fa fa-heart" aria-hidden="true" />
          {" " + likes}
        </div>
      </div>
    );
  }
}

export default Card;
