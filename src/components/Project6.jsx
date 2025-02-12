import React from "react";
import { Link } from "react-router-dom";
import Volumeplayer from "./Volumeplayer";

const Project6 = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16">
      {/* Go Back Button */}
      <div className="flex justify-start mt-5">
        <Link to={-1}>
          <button className="bg-transparent border-2 border-purple-900 text-white text-lg sm:text-xl px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow-lg hover:bg-purple-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transform transition-transform hover:scale-105 active:scale-100">
            Go back
          </button>
        </Link>
      </div>

      {/* Page Title */}
      <h1 className="pb-8 sm:pb-16 text-3xl sm:text-4xl lg:text-6xl font-thin tracking-tight mt-8 text-center">
        Gesture Volume Controller
      </h1>

      {/* Introduction Section */}
      <h1 className="mb-6 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl lg:text-5xl tracking-tight text-transparent">
        Introduction
      </h1>
      <p
        className="mb-12 text-neutral-300 text-base sm:text-lg lg:text-xl leading-relaxed text-justify"
        style={{ lineHeight: "2" }}
      >
        As technology advances, the way we interact with our devices continues
        to evolve, with gesture-based controls offering a more intuitive and
        seamless user experience. I developed a Gesture Volume Controller for
        laptops and PCs, utilizing MediaPipe and machine learning models to
        enable users to adjust their device's volume using simple hand gestures.
        This innovative application leverages MediaPipe's real-time
        hand-tracking capabilities to detect specific gestures, which are then
        interpreted by machine learning models to control the volume. The system
        is designed to recognize gestures such as hand waves or finger
        movements, providing an efficient and touch-free method for managing
        audio levels. This project showcases my ability to integrate computer
        vision and machine learning technologies into practical applications,
        offering a glimpse into the future of human-computer interaction. The
        Gesture Volume Controller not only enhances convenience but also
        represents a step towards more natural and immersive ways of interacting
        with technology.
      </p>

      {/* Video Section */}
      <div className="mb-12">
        <Volumeplayer />
      </div>

      {/* Go Back Button */}
      <div className="flex justify-start mt-5 mb-10">
        <Link to={-1}>
          <button className="bg-transparent border-2 border-purple-700 text-white text-lg sm:text-xl px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow-lg hover:bg-purple-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transform transition-transform hover:scale-105 active:scale-100">
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Project6;
