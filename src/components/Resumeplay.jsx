import React from "react";
import portfolio from "../assets/portfolio.mp4";

const Resumeplay = () => {
  return (
    <div className="rounded-md overflow-hidden shadow-lg">
      <video width="100%" controls>
        <source src={portfolio} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Resumeplay;
