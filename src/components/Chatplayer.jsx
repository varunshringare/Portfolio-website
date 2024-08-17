import React from "react";
import Chat from "../assets/Chatting.mp4";

const Chatplayer = () => {
  return (
    <div className="rounded-md overflow-hidden shadow-lg">
      <video width="100%" controls>
        <source src={Chat} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Chatplayer;
