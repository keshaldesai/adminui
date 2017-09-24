import React from "react";
import Panel from "../../Shared/Panel";
import TextArea from "../TextArea";
import SocialUser from "./SocialUser";
import Comments from "./Comments";

const SocialItem = ({ children, user, location }) => {
  return (
    <Panel color="#efefef">
      <div className="soc-item-meta">
        <SocialUser user={user} location={location} />
        <div className="soc-item-content">{children}</div>
        <Comments />
      </div>
      <TextArea placeholder="Write a comment..." />
    </Panel>
  );
};

export default SocialItem;
