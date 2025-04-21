import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/algo.png"
          title="Algorithmic Symphony"
          description="An interactive web app that visualizes sorting algorithms like Bubble Sort, Merge Sort, Quick Sort, etc., with real-time animations and bars representing array elements that can be user-defined."
        />
        <ProjectCard
          src="/codereview.png"
          title="Code Review App"
          description="A full-stack web app for reviewing code,built using Express.js, React, and Node. Users upload code snippets in any language and get it reviewed by Open API."
        />
        <ProjectCard
          src="/climateview.png"
          title="Climate View App"
          description="Displays weather and climate-related data by consuming APIs (OpenWeatherMap). Includes visual indicators for temperature, humidity, and forecasts on any search cities. "
        />
        <ProjectCard
          src="/econnect.png"
          title="Econnect"
          description="A front-end replica of WhatsApp using HTML, CSS, and JavaScript. Mimics the layout, chat bubbles, sidebar but without any messaging functionality or database connection."
        />
        <ProjectCard
          src="/reasonsgenerator.png"
          title="100 reasons to stay alive"
          description="A simple, motivating project to generate 100 reasons to live for randomly."
        />
        <ProjectCard
          src="/tictactoe.png"
          title="Tic Tac Toe"
          description="A simple two-player game includes logic for turn switching, win detection, and draw scenarios. Great for practicing DOM manipulation and basic game logic."
        />
        <ProjectCard
          src="/snakegame.png"
          title="Snake Game"
          description="A grid-based classic game built with JavaScript and HTML Canvas. The snake grows by consuming food and the game ends on collision and also includes scoring."
        />
      </div>
    </div>
  );
};

export default Projects;