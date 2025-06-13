"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";

const projects = [
  {
    src: "/algo.png",
    title: "Algorithmic Symphony",
    description:
      "An interactive web app that visualizes sorting algorithms like Bubble Sort, Merge Sort, Quick Sort, etc., with real-time animations and bars representing array elements that can be user-defined.",
    github: "https://github.com/knownstranger-Tapasya/Algorithmic-Symphony",
    live: "https://knownstranger-tapasya.github.io/Algorithmic-Symphony/",
  },
  {
    src: "/pandemicpulse.png",
    title: "Pandemic Pulse",
    description:"Created a real-time COVID-19 analytics dashboard using Dash and Flask, visualizing live data from disease.sh API with interactive charts. Enabled responsive design, dark mode, and auto-refresh for enhanced user experience.",
    github: "https://github.com/knownstranger-Tapasya/PandemicPulse",
  },
  {
    src: "/resumebuilder.png",
    title: "Resume Builder",
    description:"Built a full-stack responsive web app for creating and managing resumes with secure user authentication. Developed REST APIs and integrated PDF export and cloud storage for seamless resume sharing.",
    github: "https://github.com/knownstranger-Tapasya/Resume-Builder",
    live: "https://resume-builder-five-flax.vercel.app/",
  },
  {
    src: "/codereview.png",
    title: "Code Review App",
    description:
      "A full-stack web app for reviewing code, built using Express.js, React, and Node. Users upload code snippets in any language and get it reviewed by Open API.",
    github: "https://github.com/knownstranger-Tapasya/CODE-REVIEW",
    live: "https://code-review-dusky.vercel.app/",
  },
  {
    src: "/visionpaddle.png",
    title: "Vision Paddle",
    description:"Developed an interactive Pong game controlled by webcam using HSV color segmentation and contour detection for precise paddle movement. Optimized vision pipeline for low latency and robust tracking with modular game design in PyGame.",
    github: "https://github.com/knownstranger-Tapasya/VisionPaddle",
  },
  {
    src: "/climateview.png",
    title: "Climate View App",
    description:
      "Displays weather and climate-related data by consuming APIs (OpenWeatherMap). Includes visual indicators for temperature, humidity, and forecasts on any searched city.",
    github: "https://github.com/knownstranger-Tapasya/Climate-View",
    live: "https://knownstranger-tapasya.github.io/Climate-View/",
  },
  {
    src: "/econnect.png",
    title: "Econnect",
    description:
      "A front-end replica of WhatsApp using HTML, CSS, and JavaScript. Mimics the layout, chat bubbles, and sidebar UI without backend integration.",
    github: "https://github.com/knownstranger-Tapasya/Econnect",
    live: "https://knownstranger-tapasya.github.io/Econnect/",
  },
  {
    src: "/reasonsgenerator.png",
    title: "100 Reasons to Stay Alive",
    description:
      "A simple, motivational project that generates random reasons to live for. Designed to lift spirits and provide perspective.",
    github: "https://github.com/knownstranger-Tapasya/reasons-Generator",
    live: "https://knownstranger-tapasya.github.io/Reasons-Generator/",
  },
  {
    src: "/numberguesser.png",
    title: "Number Guesser",
    description:
      "A fun game to guess numbers from 1 to 100 within a given timeframe and limited chances.",
    github: "https://github.com/knownstranger-Tapasya/Number-Guesser",
    live: "https://knownstranger-tapasya.github.io/Number-Guesser/",
  },
  // {
  //   src: "/acme.png",
  //   title: "Acme Rockets",
  //   description:
  //     "A simple static clone website of Acme Rockets.",
  //   github: "https://github.com/knownstranger-Tapasya/Acme",
  //   live: "https://github.com/knownstranger-Tapasya/Acme",
  // },
  // {
  //   src: "/tictactoe.png",
  //   title: "Tic Tac Toe",
  //   description:
  //     "Classic two-player Tic Tac Toe game with win/draw logic. Great for DOM manipulation and event-driven game state.",
  //   github: "https://github.com/knownstranger-Tapasya/TicTacToe",
  //   live: "https://knownstranger-tapasya.github.io/TicTacToe/",
  // },
  // {
  //   src: "/snakegame.png",
  //   title: "Snake Game",
  //   description:
  //     "Grid-based snake game built with JavaScript and Canvas API. Includes scoring, collision detection, and keyboard controls.",
  //   github: "https://github.com/knownstranger-Tapasya/Snake-Game",
  //   live: "https://snake-game-knownstranger-tapasya.vercel.app/",
  // },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-12 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
