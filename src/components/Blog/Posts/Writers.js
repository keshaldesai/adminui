import React from "react";
import Panel from "../../Shared/Panel";
import PostsTop from "./PostsTop";
import Spotlight from "./Spotlight";
import Suscribe from "./Suscribe";

const Writers = ({ users }) => {
  return (
    <Panel>
      <PostsTop title="OUR WRITERS">
        <Spotlight user={users[4]} />
        <Spotlight user={users[5]} />
        <Spotlight user={users[9]} />
        <Spotlight user={users[2]} />
      </PostsTop>
      <div className="posts-panel-inner">
        <Suscribe />
      </div>
    </Panel>
  );
};

export default Writers;
