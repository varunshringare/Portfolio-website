import React from "react";
import { Link } from "react-router-dom";
import Chatplayer from "./Chatplayer";

const Project5 = () => {
  return (
    <div className="container mx-auto px-1.5 sm:px-8 lg:px-16">
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
        Chatting Application
      </h1>

      {/* Introduction Section */}
      <h1 className="mb-6 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl lg:text-5xl tracking-tight text-transparent">
        Introduction
      </h1>
      <p
        className="mb-12 text-neutral-300 text-base sm:text-lg lg:text-xl leading-relaxed text-justify"
        style={{ lineHeight: "1.5" }}
      >
        Effective communication is the backbone of modern networking, and
        building a robust messaging platform requires a deep understanding of
        network protocols and real-time data exchange. I developed a
        Client-Server Chatting Application using Java, leveraging socket
        programming to enable real-time communication between multiple users.
        This application is designed to facilitate instant messaging by
        establishing a reliable connection between the client and server. The
        server handles multiple clients simultaneously, managing message routing
        and ensuring that each user's messages are delivered accurately and
        efficiently. The use of Java and socket programming allows for
        low-latency communication, making the chat experience smooth and
        responsive. Through this project, I demonstrated my ability to work with
        network programming concepts, implement efficient data handling, and
        create a user-friendly interface for real-time communication.
      </p>
      <h1 className="my-6 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-4xl lg:text-5xl tracking-tight text-transparent">
        Demo video
      </h1>
      <div className="mb-12">
        <Chatplayer />
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

export default Project5;
