"use client";

import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import TimelineCard from "../sub/TimelineCard";

const experienceData = [
  {
    title: "Systems Engineer Trainee",
    subtitle: "Surelia Infosystems Pvt.Ltd.",
    location: "Newtown, North 24 Paraganas",
    time: "Present",
    description:
      "Working with Python and SQL alongside DevOps and testing tools to build scalable solutions and streamline development in an Agile environment."
    },
  {
    title: "Web Developer Intern",
    subtitle: "CodeClause",
    location: "Remote",
    time: "Jan 2023 - Present",
    description:
      "Worked on making various creative websites using cutting edge technologies.",
  },
];

const Experience = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-8 py-20" id="experience">
      <h1 className="text-5xl font-bold text-center mb-24 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 z-10 relative">
        Experience
      </h1>

       {/* Vertical dotted timeline line */}
       <div className="absolute top-45 left-1/2 transform -translate-x-1/2 h-180 w-[2px] bg-gradient-to-b from-purple-500 to-cyan-400 bg-[length:4px_10px] bg-repeat-y bg-dotted z-0 animate-pulse" />

      <div className="flex flex-col gap-20 relative z-10">
        {experienceData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95, y: -50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <TimelineCard
              icon={<Briefcase size={22} />}
              title={item.title}
              subtitle={item.subtitle}
              location={item.location}
              time={item.time}
              description={item.description}
              isLeft={i % 2 === 0}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
