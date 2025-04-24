"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import TimelineCard from "../sub/TimelineCard";

const educationData = [
  {
    title: "B.Tech in Computer Science",
    subtitle: "Brainware University",
    location: "Barasat, North 24 Paraganas",
    time: "2020 - 2024",
    description: "Graduated with First Class obtaining 9.65 GPA. Learned Fullstack Dev, DSA, and more.",
  },
  {
    title: "Senior Secondary (AISSCE)",
    subtitle: "B. D. M. International School",
    location: "Kolkata",
    time: "2018 - 2020",
    description: "Passed with 79% in PCM stream.",
  },
  {
    title: "Secondary (AISSE)",
    subtitle: "B. D. M. International School",
    location: "Kolkata",
    time: "2016 - 2018",
    description: "Passed with 91% in PCM stream.",
  },
];

const Education = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-8 py-20" id="education">
      <h1 className="text-5xl font-bold text-center mb-32 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 relative z-10">
        Education
      </h1>

      {/* Vertical dotted timeline line */}
      <div className="absolute top-45 left-1/2 transform -translate-x-1/2 h-280 w-[2px] bg-gradient-to-b from-purple-500 to-cyan-400 bg-[length:4px_10px] bg-repeat-y bg-dotted z-0 animate-pulse" />

      <div className="flex flex-col gap-28 relative z-10">
        {educationData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <TimelineCard
              icon={<GraduationCap size={22} />}
              title={item.title}
              subtitle={item.subtitle}
              location={item.location}
              time={item.time}
              description={item.description}
              isLeft={i % 2 === 0} // Alternates left/right
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
