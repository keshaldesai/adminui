import React from "react";
import Panel from "../../Shared/Panel";
import PostsTop from "./PostsTop";
import BlogLink from "./BlogLink";
import Tags from "./Tags";

const Trending = () => {
  const tagGroup = [
    "Food",
    "New York",
    "CSS",
    "HTML",
    "Web",
    "Internet",
    "Sports"
  ];
  return (
    <Panel>
      <PostsTop title="TRENDING POSTS">
        <BlogLink
          title="Brute munere blandit"
          author="Marsha Stewart"
          time="47 seconds ago"
        />
        <BlogLink
          title="Velit integre argumentum ne nam"
          author="Armando Grey"
          time="2 hours ago"
        />
        <BlogLink
          title="Lus id erant ludus"
          author="Kevin Jacobs"
          time="7 hours ago"
        />
        <BlogLink
          title="Audiam epicurei usu id"
          author="Sonia Butler"
          time="1 day ago"
        />
      </PostsTop>
      <div className="posts-panel-inner">
        <Tags tagGroup={tagGroup} />
      </div>
    </Panel>
  );
};

export default Trending;
