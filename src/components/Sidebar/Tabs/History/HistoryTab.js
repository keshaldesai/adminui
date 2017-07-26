import React, { Component } from "react";
import HistoryEvent from "./HistoryEvent";
import FriendRequest from "./FriendRequest";
import SocialImage from "./SocialImage";

class HistoryTab extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="tab history timeline">
        <HistoryEvent date="Jul 26, 2017" user={users[0]}>
          <FriendRequest />
        </HistoryEvent>
        <HistoryEvent date="Jul 25, 2017" user={users[1]}>
          <SocialImage
            url="https://images.unsplash.com/photo-1470833822237-88c0f77eeee0?dpr=1.25&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
            alt="grand central"
          >
            Visiting Grand Central at 89 E 42nd St, New York, NY 10017
          </SocialImage>
        </HistoryEvent>
        <HistoryEvent date="Jul 10, 2017" user={users[2]}>
          <div className="event-item">
            <div className="event-meta">
              Hey you free tomorrow? Lets go shopping!
            </div>
          </div>
        </HistoryEvent>
      </div>
    );
  }
}

export default HistoryTab;
