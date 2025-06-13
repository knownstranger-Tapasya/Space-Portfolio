"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface Props {
  src: string;
  title: string;
  description: string;
  github: string;
  live?: string;
  index: number;
}

const ProjectCard = ({ src, title, description, github, live, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-xl shadow-lg overflow-hidden w-full h-[270px]"
    >
      {/* Image */}
      <Image
        src={src}
        alt={title}
        width={500}
        height={300}
        className="w-full h-full object-cover rounded-xl"
      />

      {/* Description (Always Visible) */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white px-4 py-2 z-10">
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-sm">{description}</p>
      </div>

     {/* Hover Overlay (Hidden initially) */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 bg-opacity-90 text-white p-4 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-black hover:text-white transition"
      >
        <Github size={20} />
      </a>

      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-black hover:text-white transition"
        >
          <ExternalLink size={20} />
        </a>
      )}
    </div>

    </motion.div>
  );
};

export default ProjectCard;
