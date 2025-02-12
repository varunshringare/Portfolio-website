import React from "react";
import { Link } from "react-router-dom";
import Chatbotplayer from "./Chatbotplayer";

const Project8 = () => {
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
        AI Chatbot
      </h1>

      {/* Introduction Section */}
      <h1 className="mb-6 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl lg:text-5xl tracking-tight text-transparent">
        Introduction
      </h1>
      <p
        className="mb-12 text-neutral-300 text-base sm:text-lg lg:text-xl leading-relaxed text-justify"
        style={{ lineHeight: "2" }}
      >
        An AI Chatbot based on using OpenAI as SaaS, built using the MERN stack,
        provides a powerful and secure solution for interactive customer support
        and engagement. Combining MongoDB, Express.js, React, and Node.js, the
        chatbot delivers a robust and scalable platform capable of handling
        diverse conversational needs. The chatbot features advanced
        authentication mechanisms, including multi-factor authentication (MFA)
        and JSON Web Tokens (JWT), to ensure secure access and session
        management. With role-based access control, it offers tailored user
        experiences based on permissions, safeguarding sensitive information and
        user interactions. Leveraging sophisticated AI models, the chatbot
        engages in context-aware conversations, understanding user intents and
        providing accurate responses. This enables it to manage a wide range of
        queries, from simple FAQs to complex problem-solving tasks, enhancing
        user satisfaction and support efficiency. The MERN stack architecture
        ensures seamless integration with other web technologies and services,
        offering a dynamic and responsive user interface through React. The
        backend, powered by Express.js and Node.js, handles server-side
        operations efficiently, while MongoDB provides a flexible NoSQL database
        for storing user data and chat histories.
      </p>

      {/* Demo Video Section */}
      <h1 className="my-8 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl lg:text-5xl tracking-tight text-transparent">
        Demo Video
      </h1>
      <div className="mb-12">
        <Chatbotplayer />
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

export default Project8;
