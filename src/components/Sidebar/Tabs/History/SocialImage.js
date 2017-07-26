import React from "react";

const SocialImage = ({ url, alt, children }) => {
  return (
    <div className="image event">
      <div className="event-meta">
        {children}
      </div>
      <img src={url} alt={alt} />
    </div>
  );
};

export default SocialImage;
