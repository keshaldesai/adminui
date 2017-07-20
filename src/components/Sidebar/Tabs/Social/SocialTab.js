import React, { Component } from "react";
import SocialGroup from "./SocialGroup";

class SocialTab extends Component {
  render() {
    const online = [
      "Merle Abbott",
      "Isadore Okuneva",
      "Dayna Mohr",
      "Dakota Kerluke"
    ];
    const idle = ["Madilyn O'Reilly", "Laverna Legros", "Michael Haley"];
    const busy = [
      "Rogelio Boyle",
      "Juanita Lubowitz",
      "Khalil Kautzer",
      "Katarina Schulist"
    ];
    const offline = ["Dejah Prosacco", "Wendell Kunze", "Asha Hills"];
    return (
      <div className="tab tab-social">
        <div className="tab-title">ONLINE (4)</div>
        <SocialGroup type="online" users={online} />
        <div className="tab-title">IDLE (3)</div>
        <SocialGroup type="idle" users={idle} />
        <div className="tab-title">BUSY (4)</div>
        <SocialGroup type="busy" users={busy} />
        <div className="tab-title">OFFLINE (3)</div>
        <SocialGroup type="offline" users={offline} />
      </div>
    );
  }
}

export default SocialTab;
