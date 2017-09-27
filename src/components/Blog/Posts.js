import React, { Component } from "react";
import SingleItem from "./Posts/SingleItem";
import About from "./Posts/About";
import Social from "./Posts/Social";
import Trending from "./Posts/Trending";
import Writers from "./Posts/Writers";

class Posts extends Component {
  componentDidMount() {
    this.props.handleActive();
  }
  render() {
    return (
      <div className="posts">
        <div className="posts-items">
          {data.map(onePost => {
            return <SingleItem data={onePost} key={onePost.postId} />;
          })}
        </div>
        <div className="posts-extra">
          <About />
          <Social />
          <Trending />
          <Writers users={this.props.users} />
        </div>
      </div>
    );
  }
}

const data = [
  {
    image: "1440637475816-2e8bf1d4b6f3",
    author: "Stephen Green",
    date: "Jul 6, 2017",
    readTime: 4,
    title: "Pizza",
    content:
      "Sed id pretium augue. Duis ultricies lectus a rhoncus vulputate. Ut a leo sed nisl maximus sollicitudin at id diam. Etiam volutpat at massa id laoreet. Vestibulum rutrum, dolor vel ultricies pretium, neque dui porta elit, ut sollicitudin arcu turpis vitae ex.",
    tag: "Food",
    comments: 24,
    shares: 13,
    likes: 49,
    postId: 1
  },
  {
    image: "1485313260896-6e6edf486858",
    author: "Samantha Dean",
    date: "Jul 1, 2017",
    readTime: 7,
    title: "University Football Practice",
    content:
      "Donec sodales lobortis mi vitae porttitor. Maecenas porttitor semper lacus, vel fermentum leo convallis in. Sed vel ex fermentum, suscipit felis mattis, volutpat risus. Curabitur sit amet augue eu eros egestas lobortis.",
    tag: "Football",
    comments: 5,
    shares: 9,
    likes: 20,
    postId: 2
  },
  {
    image: "1504964148034-86ded740d1e2",
    author: "Shawn Lewis",
    date: "Jun 28, 2017",
    readTime: 6,
    title: "Camping near the mountains",
    content:
      "Phasellus ultrices tellus a nisi sollicitudin sodales. Pellentesque consectetur neque ut interdum fringilla. Proin est arcu, pretium ut augue quis, aliquet lacinia libero. Sed placerat orci lorem, eget sodales velit consectetur eu. Curabitur at ullamcorper nibh. Sed maximus, elit in ultrices consequat, ipsum mauris luctus tellus, mollis fermentum nulla lectus eu nisl.",
    tag: "Camping",
    comments: 25,
    shares: 33,
    likes: 109,
    postId: 3
  }
];

export default Posts;
