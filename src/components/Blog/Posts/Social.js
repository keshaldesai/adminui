import React from "react";
import Panel from "../../Shared/Panel";
import Icon from "./Icon";

const Social = () => {
  return (
    <Panel>
      <div
        className="posts-panel-inner flex-row"
        style={{ justifyContent: "space-between" }}
      >
        <Icon name="facebook" />
        <Icon name="twitter" />
        <Icon name="google-plus" />
        <Icon name="pinterest-p" />
        <Icon name="instagram" />
      </div>
    </Panel>
  );
};

export default Social;
