import React, { Component } from "react";
import FullImg from "./FullImg";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false, showFull: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleMagnify = this.handleMagnify.bind(this);
  }
  handleClick() {
    this.setState({ active: !this.state.active });
  }
  handleMagnify() {
    this.setState({ showFull: !this.state.showFull });
  }
  render() {
    const { title, date, likes, url } = this.props.info;
    const { active, showFull } = this.state;
    const activeStyle = active
      ? { backgroundColor: "#ff0000", borderColor: "#ff0000", color: "#ffffff" }
      : {};
    const newLikes = active ? likes + 1 : likes;
    return (
      <div className="card">
        <div className="card-img-cont" onClick={this.handleMagnify}>
          <img alt="cardimage" src={url + "?w=260&h=195&fit=crop"} />
          <div className="card-img-over" />
          <div className="card-mag">
            <i className="fa fa-search-plus fa-2x" aria-hidden="true" />
          </div>
        </div>
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
        {showFull ? (
          <FullImg url={url} handleMagnify={this.handleMagnify} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Card;
