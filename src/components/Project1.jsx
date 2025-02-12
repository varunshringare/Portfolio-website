import React from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "./Videoplayer";

const Project1 = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-start mt-5">
        <Link to={-1}>
          <button className="bg-transparent border-2 border-purple-900 text-white text-sm sm:text-base lg:text-xl px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg shadow-lg hover:bg-purple-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1 transform transition-transform hover:scale-105 active:scale-100">
            Go back
          </button>
        </Link>
      </div>

      <h1 className="pb-8 text-2xl sm:text-3xl lg:text-4xl font-thin tracking-tight lg:mt-16 lg:text-7xl text-center">
        Gesture control system for drones
      </h1>
      <h1 className="mb-4 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-4xl lg:text-5xl tracking-tight text-transparent">
        Introduction
      </h1>
      <p
        className="mb-12 lg:mt-16 text-neutral-300 text-base sm:text-lg lg:text-xl leading-relaxed"
        style={{ textAlign: "justify", lineHeight: "1.8" }}
      >
        The rapid increase of drone technology has sparked a demand for
        innovative and intuitive control systems, transcending traditional
        remote controllers. The proliferation of drone technology has
        revolutionized numerous industries, offering unprecedented capabilities
        in aerial surveillance, data collection, and automated operations.
        {/* ...Content continues */}
      </p>
      <h1 className="my-6 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-4xl lg:text-5xl tracking-tight text-transparent">
        Demo video
      </h1>
      <VideoPlayer />
      <div className="flex justify-start mt-5 mb-10 space-x-4 sm:space-x-6 lg:space-x-8">
        <Link to={-1}>
          <button className="bg-transparent border-2 border-purple-700 text-white text-sm sm:text-base lg:text-xl px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg shadow-lg hover:bg-purple-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-3 transform transition-transform hover:scale-105 active:scale-100">
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Project1;
