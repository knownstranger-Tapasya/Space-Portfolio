import React from "react";

interface TimelineCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  location: string;
  time: string;
  description: string;
  isLeft: boolean;
}

const TimelineCard = ({
  icon,
  title,
  subtitle,
  location,
  time,
  description,
  isLeft,
}: TimelineCardProps) => {
  return (
    <div
      className={`w-full flex ${
        isLeft ? "justify-start pr-10" : "justify-end pl-10"
      }`}
    >
      <div className="bg-[#0c0c0c] border border-purple-800 rounded-lg shadow-xl p-6 max-w-md relative">
        {/* Icon bubble */}
        <div
          className={`absolute top-4 ${
            isLeft ? "right-[-26px]" : "left-[-26px]"
          } w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center shadow-md z-20`}
        >
          {icon}
        </div>

        <small className="text-purple-300 font-light">{time}</small>
        <h2 className="text-2xl font-bold text-white mt-2">{title}</h2>
        <p className="text-md text-gray-400 italic mb-2">{subtitle}</p>
        <p className="text-md text-gray-400 italic mb-2">{location}</p>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default TimelineCard;
