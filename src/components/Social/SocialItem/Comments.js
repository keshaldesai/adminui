import React from "react";
import UserIcon from "../../Shared/UserIcon";

const Comments = ({ data }) => {
  return (
    <div className="comm">
      {data.map(comment => {
        return (
          <div className="comm-one flex-row" key={comment.user.name}>
            <UserIcon
              color="#ffffff"
              picture={comment.user.picture}
              width="40px"
            />
            <div className="comm-info">
              <div className="comm-name">{comment.user.name}</div>
              <div className="comm-main">{comment.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
