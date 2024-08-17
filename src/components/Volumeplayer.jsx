import React from "react";
import Vol from "../assets/Volume.mp4";

const Volumeplayer = () => {
  return (
    <div className="rounded-md overflow-hidden shadow-lg">
      <video width="100%" controls>
        <source src={Vol} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Volumeplayer;
