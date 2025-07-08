"use client";

import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import TimelineCard from "../sub/TimelineCard";

const experienceData = [
  {
    title: "Systems Engineer Trainee → Systems Engineer",
    subtitle: "Surelia Infosystems Pvt. Ltd.",
    location: "Newtown, North 24 Parganas",
    time: "Aug 2024 – Present",
    description: (
      <>
        <p className="mb-4">
          <strong>Systems Engineer (Apr 2025 – Present):</strong><br />
          Build scalable backend services using Python, Kafka, Redis (ElastiCache), and PostgreSQL, deployed on AWS EC2 with YAML-based configurations. Work in Agile teams to deliver reliable, production-grade systems with strong focus on code quality, system efficiency, and collaboration.</p>
        <p>
          <strong>Systems Engineer Trainee (Aug 2024 – Mar 2025):</strong><br />
          Contributed to internal tooling and backend modules using Python, PostgreSQL, and Shell scripting. Developed familiarity with version control using Git and Agile development practices through active participation in sprints and code reviews.
        </p>
      </>
    ),
  },
  {
    title: "Web Developer Intern",
    subtitle: "CodeClause",
    location: "Remote",
    time: "Feb 2024 – Mar 2024",
    description:
      "Built responsive, interactive websites using HTML, CSS, and JavaScript. Focused on modern UI practices and delivered clean, cross-browser-compatible designs.",
  },
];

const Experience = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-8 py-20" id="experience">
      <h1 className="text-5xl font-bold text-center mb-24 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500 z-10 relative">
        Experience
      </h1>

      <div className="absolute top-45 left-1/2 transform -translate-x-1/2 h-215 w-[2px] bg-gradient-to-b from-purple-500 to-cyan-500 bg-[length:4px_10px] bg-repeat-y bg-dotted z-0 animate-pulse" />

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
