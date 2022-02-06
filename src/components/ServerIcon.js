import React from "react";

const ServerIcon = ({ image }) => {
  return (
    <img
      src={image}
      alt=""
      className="h-12 cursor-pointer rounded-full transition-all"
    />
  );
};

export default ServerIcon;
