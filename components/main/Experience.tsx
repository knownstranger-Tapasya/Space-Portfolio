"use client";

import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import TimelineCard from "../sub/TimelineCard";

const experienceData = [
  {
    title: "Systems Engineer Trainee",
    subtitle: "Surelia Infosystems Pvt Ltd",
    location: "Newtown, North 24 Paraganas",
    time: "Present",
    description: "Built dynamic interfaces using React, Tailwind, and integrated APIs.",
  },
  {
    title: "Web Developer Intern",
    subtitle: "CodeClause",
    location: "Remote",
    time: "Jan 2023 - Present",
    description: "Worked with multiple clients building responsive websites and applications using Next.js and Firebase.",
  },
];

const Experience = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-8 py-20" id="experience">
      <h1 className="text-5xl font-bold text-center mb-32 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 relative z-10">
        Experience
      </h1>

      {/* Timeline Line */}
      <div className="absolute top-36 left-1/2 transform -translate-x-1/2 h-[calc(100%-9rem)] w-1 bg-gray-600 z-0" />

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        {experienceData.map((item, i) => (
          <motion.div
            key={i}
            className={`col-span-1 ${i % 2 === 0 ? "md:justify-self-start" : "md:justify-self-end"}`}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
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
