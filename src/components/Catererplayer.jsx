import React from "react";
import Cat from "../assets/caterer.mp4";

const Catererplayer = () => {
  return (
    <div className="rounded-md overflow-hidden shadow-lg">
      <video width="100%" controls>
        <source src={Cat} type="video/mp4" />
        Your browser does not support the video tag.{" "}
      </video>{" "}
    </div>
  );
};

export default Catererplayer;
