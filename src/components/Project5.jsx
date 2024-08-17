import React from "react";
import { Link } from "react-router-dom";
import Chatplayer from "./Chatplayer";

const Project5 = () => {
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
        Chatting application
      </h1>
      <h1 className="mb-4 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent">
        Introduction
      </h1>
      <p
        className="mb-12 text-neutral-300 text-xl justify-between"
        style={{ textAlign: "justify", lineHeight: "2" }}
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
      <Chatplayer />
      <div className="flex justify-center mt-5 mb-10 space-x-8">
        <Link to={-1}>
          <button className="bg-transparent border-2 border-purple-700 text-white text-xl px-8 py-3 rounded-lg shadow-lg hover:bg-purple-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-3 transform transition-transform hover:scale-105 active:scale-100">
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Project5;
