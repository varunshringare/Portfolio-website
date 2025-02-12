import React from "react";
import { Link } from "react-router-dom";
import Petvideoplay from "./Petvideoplay";

const Project4 = () => {
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
        Online Pet Supplies Store
      </h1>

      {/* Introduction Section */}
      <h1 className="mb-6 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl lg:text-5xl tracking-tight text-transparent">
        Introduction
      </h1>
      <p
        className="mb-12 text-neutral-300 text-base sm:text-lg lg:text-xl leading-relaxed text-justify"
        style={{ lineHeight: "2" }}
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

      {/* Video Section */}
      <div className="mb-12">
        <Petvideoplay />
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

export default Project4;
