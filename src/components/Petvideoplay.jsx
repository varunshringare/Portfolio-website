import React from "react";
import petplay from "../assets/petshop.mp4";

const Petvideoplay = () => {
  return (
    <div className="rounded-md overflow-hidden shadow-lg">
      <video width="100%" controls>
        <source src={petplay} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Petvideoplay;
