import React from "react";
import { Link } from "react-router-dom";
import Catererplayer from "./Catererplayer";

const Project5 = () => {
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
        Demo landing page
      </h1>
      <h1 className="mb-4 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent">
        Introduction
      </h1>
      <p
        className="mb-12 text-neutral-300 text-xl justify-between"
        style={{ textAlign: "justify", lineHeight: "2" }}
      >
        This project is a fully responsive demo landing page developed for Regh
        Caterers using ReactJS. The landing page serves as a dynamic showcase
        for the premium catering services provided by Regh Caterers, catering to
        events of all sizes with a strong emphasis on quality and customization.
        The site prominently features a detailed and visually appealing menu
        section, allowing potential clients to explore a diverse array of
        culinary options, from traditional dishes to contemporary flavors, all
        crafted with the finest ingredients. In addition to the menu, the
        landing page highlights the various services offered by Regh Caterers,
        including event planning, custom menu creation, and on-site catering.
        The design ensures that visitors can easily navigate through these
        services, gaining a clear understanding of what Regh Caterers can offer
        for their special occasions. Furthermore, the contact section is
        thoughtfully designed to provide multiple avenues for potential clients
        to get in touch, whether for inquiries, consultations, or bookings. With
        clean aesthetics, user-friendly navigation, and a focus on delivering
        key information, this demo landing page effectively captures the essence
        of Regh Caterers and their commitment to exceptional service.
      </p>
      <Catererplayer />
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

export default Project5;
