import React from "react";
import VideoPlayer from "./Videoplayer";
import { Link } from "react-router-dom";

const Project1 = () => {
  return (
    <div className="container mx-auto px-8">
      <Link to={-1}>
        <div className="flex justify-center mt-5">
          <button className="bg-purple-800 text-white px-8 py-3 rounded-full shadow-lg hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transform transition-transform hover:scale-110 active:scale-90">
            Go back
          </button>
        </div>
      </Link>
      <h1 className="my-20 text-center text-5xl bg-gradient-to-t from-purple-300 via-white-100 to-white text-transparent bg-clip-text">
        Gesture control system for drones
      </h1>

      <VideoPlayer />
    </div>
  );
};

export default Project1;
