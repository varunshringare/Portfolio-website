import React from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "./Videoplayer";

const Project1 = () => {
  return (
    <div className="container mx-auto px-8">
      <Link to={-1}>
        <div className="flex justify-left mt-5">
          <button className="bg-transparent border-2 border-purple-900  text-white text-xl px-8 py-3 rounded-lg shadow-lg hover:bg-purple-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset--1 transform transition-transform hover:scale-105 active:scale-100">
            Go back
          </button>
        </div>
      </Link>
      <h1 className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-7xl text-center">
        Gesture control system for drones
      </h1>
      <h1 className="mb-4 text-center lg:mt-16 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent">
        Introduction
      </h1>
      <p
        className="mb-12  lg:mt-16 text-neutral-300 text-xl justify-between"
        style={{ textAlign: "justify", lineHeight: "2" }}
      >
        The rapid increase of drone technology has sparked a demand for
        innovative and intuitive control systems, transcending traditional
        remote controllers. The proliferation of drone technology has
        revolutionized numerous industries, offering unprecedented capabilities
        in aerial surveillance, data collection, and automated operations.
        Drones, also known as Unmanned Aerial Vehicles (UAVs), have transitioned
        from niche hobbyist gadgets to essential tools in fields such as
        agriculture, construction, environmental monitoring, disaster
        management, and more. The versatility and advanced capabilities of
        modern drones make them ideal for a wide array of innovative projects
        aimed at solving real-world problems and enhancing efficiency across
        various domains. Flying a drone requires a significant investment of
        time and effort to master the necessary skills and understand the
        technical aspects involved. Initially, beginners must familiarize
        themselves with the basic controls and functions of the drone, such as
        throttle, yaw, pitch, and roll. This involves understanding how each
        control impacts the drone's movement and stability. Moreover, mastering
        the art of manoeuvring a drone in various environments and
        conditions—such as dealing with wind, obstacles, and varying light
        conditions—adds to the complexity. The learning curve can be steep,
        requiring hours of practice to achieve proficiency and confidence. In
        response to this evolving landscape, our project delves into the
        development of a Gesture Control System for Drones—a pioneering approach
        to human-drone interaction. Traditional control interfaces often pose
        challenges in terms of complexity and user experience. Our project
        addresses this gap by leveraging cutting-edge computer vision algorithms
        and machine learning techniques to enable users to control drones
        seamlessly through intuitive gestures.
      </p>
      <h1 className="my-6 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent">
        Demo video
      </h1>
      <VideoPlayer />
      <div className="flex justify-left mt-5 mb-10 space-x-8">
        <Link to={-1}>
          <button className="bg-transparent border-2 border-purple-700 text-white text-xl px-8 py-3 rounded-lg shadow-lg hover:bg-purple-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-3 transform transition-transform hover:scale-105 active:scale-100">
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Project1;
