import React from "react";
import Likes from "./Likes";

const MyDesc = () => {
  return (
    <div className="soc-mydesc">
      <div>
        <div className="soc-myloc">Empire State, NY, USA</div>
        <div className="soc-mydate">- Aug 20th, 2014</div>
      </div>
      <Likes />
    </div>
  );
};

export default MyDesc;
