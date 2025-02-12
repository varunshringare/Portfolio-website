import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../assets/Picture5.jpg";
import pic2 from "../assets/Picture2.jpg";
import pic3 from "../assets/Picture3.jpg";
import pic4 from "../assets/Picture4.jpg";

const Project3 = () => {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex justify-start mt-5">
        <Link to={-1}>
          <button className="bg-transparent border-2 border-purple-900 text-white text-base md:text-xl px-4 py-2 md:px-8 md:py-3 rounded-lg shadow-lg hover:bg-purple-950 focus:outline-none focus:ring-2 focus:ring-purple-500 transform transition-transform hover:scale-105 active:scale-100">
            Go back
          </button>
        </Link>
      </div>

      <h1 className="pb-8 text-2xl md:text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl text-center">
        Fitness Tracking Application
      </h1>

      <h1 className="mb-4 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl md:text-5xl tracking-tight text-transparent">
        Introduction
      </h1>

      <p
        className="mb-12 text-neutral-300 text-sm md:text-lg lg:text-xl leading-relaxed"
        style={{ textAlign: "justify" }}
      >
        In the realm of fitness and health, technology plays a pivotal role in
        helping individuals achieve their goals with precision and ease. I
        developed a Fitness Tracking App using React and advanced machine
        learning models to enhance the workout experience by automatically
        detecting exercises and accurately counting repetitions. This app is
        designed to assist users in maintaining proper form and tracking their
        progress over time. By leveraging machine learning algorithms, the app
        can identify different types of workouts and monitor the number of reps
        performed, providing real-time feedback and analytics. The use of React
        ensures a seamless and responsive user interface, making the app both
        functional and user-friendly. This project showcases my ability to
        integrate cutting-edge technology with practical applications,
        delivering a solution that not only meets but exceeds the expectations
        of fitness enthusiasts.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <img
          className="w-full h-auto rounded-2xl"
          src={pic1}
          alt="Fitness Tracking App Screenshot 1"
        />
        <img
          className="w-full h-auto rounded-2xl"
          src={pic2}
          alt="Fitness Tracking App Screenshot 2"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          className="w-full h-auto rounded-2xl"
          src={pic3}
          alt="Fitness Tracking App Screenshot 3"
        />
        <img
          className="w-full h-auto rounded-2xl"
          src={pic4}
          alt="Fitness Tracking App Screenshot 4"
        />
      </div>

      <div className="flex justify-start mt-5 mb-10 space-x-4 md:space-x-8">
        <Link to={-1}>
          <button className="bg-transparent border-2 border-purple-700 text-white text-base md:text-xl px-4 py-2 md:px-8 md:py-3 rounded-lg shadow-lg hover:bg-purple-950 focus:outline-none focus:ring-2 focus:ring-purple-500 transform transition-transform hover:scale-105 active:scale-100">
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Project3;
