import React from "react";
import SocialGroup from "./SocialGroup";

const SocialTab = ({ users }) => {
  if (!users || users.length !== 14) {
    return <div className="tab tab-social" />;
  }
  const online = users.slice(0, 4);
  const idle = users.slice(4, 7);
  const busy = users.slice(7, 11);
  const offline = users.slice(11);
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
};

export default SocialTab;
