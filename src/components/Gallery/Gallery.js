import React, { Component } from "react";
import Card from "./Card";

class Gallery extends Component {
  componentDidMount() {
    this.props.handleActive();
  }
  render() {
    return (
      <div className="gallery">
        {cards.map(card => {
          return <Card info={card} key={card.image} />;
        })}
      </div>
    );
  }
}

const cards = [
  {
    title: "FLOWERS",
    date: "12TH AUG",
    likes: 17,
    image: "1491994336086-44f5d76dd8f2"
  },
  {
    title: "TREES",
    date: "7TH AUG",
    likes: 12,
    image: "1499875087559-ee0963a091c6"
  },
  {
    title: "MOON",
    date: "5TH AUG",
    likes: 13,
    image: "1501656007794-a9fdce6e070e"
  },
  {
    title: "BOAT",
    date: "2ND AUG",
    likes: 2,
    image: "1470255033145-e4d1c1c47539"
  },
  {
    title: "BAHAMAS",
    date: "24TH JUL",
    likes: 17,
    image: "1490048463541-f803d9bb10dd"
  },
  {
    title: "CAR",
    date: "12TH JUL",
    likes: 24,
    image: "1504084929552-a0b2dc8acfdb"
  },
  {
    title: "HIGHWAY",
    date: "9TH JUL",
    likes: 5,
    image: "1494233892892-84542a694e72"
  },
  {
    title: "SKY",
    date: "4TH JUL",
    likes: 12,
    image: "1502681151232-97cbff06fd18"
  },
  {
    title: "MOUNTAIN",
    date: "3RD JUL",
    likes: 14,
    image: "1485119074232-f9a19907e190"
  }
];

export default Gallery;
