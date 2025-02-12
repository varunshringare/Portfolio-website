import React from "react";
import { Link } from "react-router-dom";
import Resumeplayer from "./Resumeplay";

const Project2 = () => {
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
        Portfolio website
      </h1>
      <h1 className="mb-4 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent">
        Introduction
      </h1>
      <p
        className="mb-12 text-neutral-300 text-xl justify-between"
        style={{ textAlign: "justify", lineHeight: "2" }}
      >
        In today's digital age, having a personal online portfolio is essential
        for showcasing skills, projects, and professional accomplishments. I
        designed and developed a responsive portfolio website using ReactJS and
        Tailwind CSS to effectively present my work and experience. This project
        highlights my ability to create modern, visually appealing, and
        user-friendly web applications. The portfolio website is not just a
        showcase of my work but also a demonstration of my proficiency in
        front-end development, including the use of ReactJS for building
        interactive components and Tailwind CSS for crafting elegant, responsive
        designs. Through this project, I aimed to create an intuitive user
        experience that reflects my skills and dedication to quality.
      </p>
      <Resumeplayer />
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

export default Project2;
