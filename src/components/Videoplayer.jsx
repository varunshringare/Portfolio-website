import React from "react";
import dronui from "../assets/droneui.mp4";

const Videoplayer = () => {
  return (
    <div className="rounded-md overflow-hidden shadow-lg">
      <video width="100%" controls>
        <source src={dronui} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Videoplayer;
