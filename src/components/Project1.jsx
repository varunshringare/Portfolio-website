import React from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "./Videoplayer";

const Project1 = () => {
  return (
    <div className="container mx-auto px-1.5 sm:px-6 lg:px-8">
      <div className="flex justify-start mt-5">
        <Link to={-1}>
          <button className="bg-transparent border-2 border-purple-900 text-white text-sm sm:text-base lg:text-xl px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg shadow-lg hover:bg-purple-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1 transform transition-transform hover:scale-105 active:scale-100">
            Go back
          </button>
        </Link>
      </div>

      <h1 className="pb-8 text-2xl sm:text-3xl lg:text-4xl font-thin tracking-tight lg:mt-16 lg:text-7xl text-center">
        Gesture control system for drones
      </h1>
      <h1 className="mb-4 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-4xl lg:text-5xl tracking-tight text-transparent">
        Introduction
      </h1>
      <p
        className="mb-12 lg:mt-16 text-neutral-300 text-base sm:text-lg lg:text-xl leading-relaxed"
        style={{ textAlign: "justify", lineHeight: "1.5" }}
      >
        In this project, we began by constructing the drone, carefully selecting
        the right components to ensure the design fit within the project scope
        and requirements. Once the drone was built, we turned our focus to
        collecting the dataset necessary for developing the Gesture Control
        System. To create this dataset, we recorded videos of ourselves
        performing the desired hand gestures, each lasting 4–5 minutes. We then
        classified the frames of these videos into their respective gesture
        categories by playing the footage and using keyboard keys for manual
        classification. For each gesture, we extracted between 200 and 400
        images to form a robust dataset. The dataset was then split into two
        parts, with 97% used for training the machine learning model and 3%
        reserved for testing its performance. This division ensured the model
        had sufficient data to learn effectively while allowing a reliable
        evaluation of its accuracy and generalization capabilities.
      </p>
      <p
        className="mb-12 lg:mt-16 text-neutral-300 text-base sm:text-lg lg:text-xl leading-relaxed"
        style={{ textAlign: "justify", lineHeight: "1.5" }}
      >
        The work in this paper focuses on enhancing human-drone interaction by
        developing a Gesture Control System that utilizes machine learning for
        intuitive drone control. The primary objective was to create a system
        that allows users to manage drones using natural hand movements, thereby
        providing a more flexible and immersive control experience. To achieve
        this, we explored and tested various machine learning models, including
        Ridge Classifier, Random Forest Classifier, Logistic Regression, and
        Gradient Boosting Algorithm, to determine the most effective approach
        for hand gesture recognition. After rigorous testing, the Random Forest
        Classifier was selected for its superior performance and reliability.
        The classifier was integrated into the MediaPipe framework, known for
        its powerful hand tracking and landmark detection capabilities. This
        combination laid a solid foundation for our gesture recognition system.
        The Random Forest Classifier proved to be highly effective, achieving an
        accuracy score of 0.9951 on a scale of 0 to 1 and a precision of 0.9949
        on a scale of 0 to 1. This level of accuracy ensures that the Gesture
        Control System offers smooth and precise control over the drone, meeting
        our goals for accuracy, real-time responsiveness, and user-friendly
        interface design.
      </p>
      <p
        className="mb-12 lg:mt-16 text-neutral-300 text-base sm:text-lg lg:text-xl leading-relaxed"
        style={{ textAlign: "justify", lineHeight: "1.5" }}
      >
        Looking ahead, there are several avenues for future development.
        Enhancements could include expanding the range of recognizable gestures,
        improving the system’s adaptability to different environments, and
        integrating additional sensors for more robust gesture detection.
        Furthermore, future work could explore the potential for machine
        learning algorithms that continuously learn and adapt to individual user
        patterns, thereby increasing the personalization and efficiency of drone
        control.
      </p>
      <h1 className="my-6 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-4xl lg:text-5xl tracking-tight text-transparent">
        Demo video
      </h1>
      <VideoPlayer />
      <div className="flex justify-start mt-5 mb-10 space-x-4 sm:space-x-6 lg:space-x-8">
        <Link to={-1}>
          <button className="bg-transparent border-2 border-purple-700 text-white text-sm sm:text-base lg:text-xl px-4 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg shadow-lg hover:bg-purple-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-3 transform transition-transform hover:scale-105 active:scale-100">
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Project1;
