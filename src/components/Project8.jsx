import React from "react";
import { Link } from "react-router-dom";
import Chatbotplayer from "./Chatbotplayer";

const Project8 = () => {
  return (
    <div className="container mx-auto px-8">
      <div className="flex justify-left mt-5">
        <Link to={-1}>
          <button className="bg-transparent border-2 border-purple-900  text-white text-xl px-8 py-3 rounded-lg shadow-lg hover:bg-purple-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset--1 transform transition-transform hover:scale-105 active:scale-100">
            Go back
          </button>
        </Link>
      </div>

      <h1 className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-7xl text-center">
        AI Chatbot
      </h1>
      <h1 className="mb-4 text-center lg:mt-16 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent">
        Introduction
      </h1>
      <p
        className="mb-12  lg:mt-16 text-neutral-300 text-xl justify-between"
        style={{ textAlign: "justify", lineHeight: "2" }}
      >
        A AI Chatbot based on using OpenAI as SaaS, built using the MERN stack,
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
      <h1 className="my-6 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent">
        Demo video
      </h1>
      <Chatbotplayer />
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

export default Project8;
