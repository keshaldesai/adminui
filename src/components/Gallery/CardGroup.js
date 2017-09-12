import React, { Component } from "react";
import Card from "./Card";

class CardGroup extends Component {
  render() {
    const cards = [
      {
        title: "FLOWERS",
        date: "12TH AUG",
        likes: 17,
        url:
          "https://images.unsplash.com/photo-1491994336086-44f5d76dd8f2?&w=200&h=150&fit=crop"
      },
      {
        title: "TREES",
        date: "7TH AUG",
        likes: 12,
        url:
          "https://images.unsplash.com/photo-1499875087559-ee0963a091c6?w=200&h=150&fit=crop"
      },
      {
        title: "MOON",
        date: "5TH AUG",
        likes: 13,
        url:
          "https://images.unsplash.com/photo-1501656007794-a9fdce6e070e?w=200&h=150&fit=crop"
      },
      {
        title: "BOAT",
        date: "2ND AUG",
        likes: 2,
        url:
          "https://images.unsplash.com/photo-1470255033145-e4d1c1c47539?w=200&h=150&fit=crop"
      },
      {
        title: "BAHAMAS",
        date: "24TH JUL",
        likes: 17,
        url:
          "https://images.unsplash.com/reserve/8T8J12VQxyqCiQFGa2ct_bahamas-atlantis.jpg?w=200&h=150&fit=crop"
      },
      {
        title: "CAR",
        date: "12TH JUL",
        likes: 24,
        url:
          "https://images.unsplash.com/photo-1504084929552-a0b2dc8acfdb?w=200&h=150&fit=crop"
      },
      {
        title: "HIGHWAY",
        date: "9TH JUL",
        likes: 5,
        url:
          "https://images.unsplash.com/photo-1494233892892-84542a694e72?w=200&h=150&fit=crop"
      },
      {
        title: "SKY",
        date: "4TH JUL",
        likes: 12,
        url:
          "https://images.unsplash.com/photo-1502681151232-97cbff06fd18?w=200&h=150&fit=crop"
      },
      {
        title: "MOUNTAIN",
        date: "3RD JUL",
        likes: 14,
        url:
          "https://images.unsplash.com/photo-1485119074232-f9a19907e190?w=200&h=150&fit=crop"
      }
    ];
    return (
      <div className="card-group">
        {cards.map(card => {
          return <Card info={card} key={card.url} />;
        })}
      </div>
    );
  }
}

export default CardGroup;
