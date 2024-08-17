import React from "react";
import { Link } from "react-router-dom";
import Petvideoplay from "./Petvideoplay";

const Project4 = () => {
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
        Online pet supplies store
      </h1>
      <h1 className="mb-4 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent">
        Introduction
      </h1>
      <p
        className="mb-12 text-neutral-300 text-xl justify-between"
        style={{ textAlign: "justify", lineHeight: "2" }}
      >
        In the fast-growing world of e-commerce, providing a seamless and
        efficient online shopping experience is crucial for businesses. I
        developed an Online Pet Store using ASP.NET, implementing a robust
        three-tier architecture to ensure scalability, maintainability, and
        security. This project is structured into three distinct layers: the
        Presentation Layer, which handles the user interface and client
        interactions; the Business Logic Layer, which processes data and
        enforces business rules; and the Data Access Layer, which manages
        database interactions and data storage. This architecture not only
        enhances the app's performance but also simplifies future updates and
        maintenance. The Online Pet Store allows users to browse and purchase a
        variety of pet products, ensuring a smooth and intuitive shopping
        experience. By employing the three-tier architecture, I was able to
        create a scalable and efficient solution that can easily adapt to future
        business needs.
      </p>
      <Petvideoplay />
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

export default Project4;
