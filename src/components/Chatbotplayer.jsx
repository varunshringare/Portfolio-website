import React from "react";
import Chatbot from "../assets/Chatbot.mp4";

const Chatbotplayer = () => {
  return (
    <div className="rounded-md overflow-hidden shadow-lg">
      <video width="100%" controls>
        <source src={Chatbot} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Chatbotplayer;
