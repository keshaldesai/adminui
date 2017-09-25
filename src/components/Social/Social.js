import React, { Component } from "react";
import About from "./About/About";
import New from "./New/New";
import SocialItem from "./SocialItem/SocialItem";

class Social extends Component {
  render() {
    const { users } = this.props;
    const comments1 = [
      { user: users[0], content: "Interesting watch!" },
      {
        user: users[3],
        content:
          "Some innovative ideas, can't wait to see them all implemented."
      }
    ];
    const comments2 = [
      {
        user: users[5],
        content: "I don't think I could start my day without coffee!"
      }
    ];
    return (
      <div className="social">
        <About user={users[0]} />
        <New />
        <SocialItem
          user={users[2]}
          location="Mountain View, CA"
          comments={comments1}
        >
          <p>Google I/O Keynote 2017</p>
          <iframe
            title="youtube"
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/Y2VF8tmLFHw?rel=0"
            frameBorder="0"
            allowFullScreen
          />
        </SocialItem>
        <SocialItem user={users[6]} location="Boston, MA">
          <p>
            Going to see my favorite band next month in Boston. Anyone want to
            come?
          </p>
          <iframe
            title="gmaps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8187.387585209825!2d-71.05834676088651!3d42.359701572721654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1506107510424"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: "0" }}
            allowFullScreen
          />
        </SocialItem>
        <SocialItem
          user={users[7]}
          location="New York, NY"
          comments={comments2}
        >
          <p>Nothing better on a Sunday morning!</p>
          <img
            src="https://images.unsplash.com/photo-1467189386127-c4e5e31ee213?dpr=1.5&auto=format&fit=crop&w=1080&h=720&q=80&cs=tinysrgb&crop="
            alt="socimage"
          />
        </SocialItem>
      </div>
    );
  }
}

export default Social;
