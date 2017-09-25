import React, { Component } from "react";
import SinglePost from "./SinglePost";

class Posts extends Component {
  render() {
    const data = [
      {
        image:
          "https://images.unsplash.com/photo-1440637475816-2e8bf1d4b6f3?dpr=1&auto=compress,format&fit=crop&w=1351&h=&q=80&cs=tinysrgb&crop=",
        author: "Carolyn Green",
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
      }
    ];
    return (
      <div className="posts">
        {data.map(onePost => {
          return <SinglePost data={onePost} key={onePost.postId} />;
        })}
      </div>
    );
  }
}

export default Posts;
