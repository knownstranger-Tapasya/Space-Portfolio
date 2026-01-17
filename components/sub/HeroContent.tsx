"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      
className="flex flex-col-reverse md:flex-row items-center justify-center px-5 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      {/* Left Content */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* Welcome Box */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] h-5 w-5" />
          <h1 className="Welcome-text text-xs sm:text-sm text-white whitespace-nowrap">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        {/* Heading */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-full sm:max-w-[90%] md:max-w-[600px]"
        >
          <span>
            Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              digital experiences
            </span>{" "}
            that leave an impact !
          </span>
        </motion.div>

        {/* Introduction */}
        <motion.div
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-5 max-w-full sm:max-w-[90%] md:max-w-[600px] leading-relaxed space-y-3"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Hello, I&apos;m Tapasya
          </h2>
          <p className="text-gray-300">
            I&apos;m a Full Stack Engineer, focused on building scalable, performant applications across web and cloud platforms. My work blends creativity with precision—whether it&apos;s intuitive UI, clean architecture, or DevOps automation, I turn complexity into clarity.
          </p>
        </motion.div>

        {/* Resume Button */}
        <motion.a
          variants={slideInFromLeft(1)}
          href="/RESUME.pdf"
          download="Tapasya_Resume"
          className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-cyan-500 hover:to-purple-600  text-white text-md font-semibold rounded-lg shadow-lg hover:shadow-xl w-fit"
        >
          Download Resume
        </motion.a>
      </div>

      {/* Right Side Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden md:flex w-full h-full justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          className="w-full max-w-[300px] md:max-w-[650px]"
          style={{ height: "auto" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;