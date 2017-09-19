import React, { Component } from "react";
import UserIcon from "../Shared/UserIcon";
import FollowButton from "./FollowButton";

class About extends Component {
  render() {
    const { picture, name } = this.props.user;
    return (
      <div className="soc-about">
        <div className="soc-about-overlay">
          <div className="soc-mypost">
            <div>Empire State, NY, USA - Aug 20th, 2014</div>
            <div>Likes</div>
          </div>
          <div className="soc-me">
            <UserIcon picture={picture} color="#bdd4de" width="80px" />
            <div className="soc-myname">{name}</div>
            <div className="soc-myjob">Pediatrician, CT</div>
            <div className="soc-follow">
              <FollowButton activeColor="#0000ff" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
