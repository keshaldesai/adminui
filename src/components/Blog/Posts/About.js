import React from "react";
import Panel from "../../Shared/Panel";
import UserIcon from "../../Shared/UserIcon";

const About = () => {
  return (
    <Panel>
      <div className="flex-row">
        <div className="posts-panel-inner">
          Welcome to my page. Please follow me to get updates on my posts!
        </div>
        <div className="posts-about-icon">
          <UserIcon
            width="45px"
            picture="https://randomuser.me/api/portraits/thumb/women/24.jpg"
            color="#FFB300"
          />
        </div>
      </div>
    </Panel>
  );
};

export default About;
