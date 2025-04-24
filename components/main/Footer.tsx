import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaStackOverflow } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {/* Community Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>

            <a
              href="https://stackoverflow.com/users/16920486/tapasya-baidya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer transition-transform duration-200 transform hover:scale-110 active:scale-95"
            >
              <FaStackOverflow />
              <span className="text-[15px] ml-[6px]">StackOverflow</span>
            </a>

            <a
              href="https://github.com/knownstranger-Tapasya/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer transition-transform duration-200 transform hover:scale-110 active:scale-95"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>

            <a
              href="https://discord.com/channels/knownstranger1662"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer transition-transform duration-200 transform hover:scale-110 active:scale-95"
            >
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </a>
          </div>

          {/* Social Media Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>

            <a
              href="https://www.instagram.com/_knownstranger_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer transition-transform duration-200 transform hover:scale-110 active:scale-95"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>

            <a
              href="https://x.com/0KnownStranger0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer transition-transform duration-200 transform hover:scale-110 active:scale-95"
            >
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </a>

            <a
              href="https://www.linkedin.com/in/tapasya-baidya/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer transition-transform duration-200 transform hover:scale-110 active:scale-95"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </a>
          </div>

          {/* About Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Contact</div>

            <p className="flex flex-row items-center my-[15px] cursor-pointer hover:scale-105 transition-all duration-300">
                <span className="text-[15px] ml-[6px]">About</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer hover:scale-105 transition-all duration-300">
                <span className="text-[15px] ml-[6px]">Learning About Me</span>
            </p>
            <a
            href="mailto:tapasyabaidya@gmail.com?subject=Let's%20Connect&body=Hi%20Tapasya%2C%20I%20checked%20out%20your%20portfolio%20and..."
            className="flex flex-row items-center my-[15px] cursor-pointer hover:scale-105 transition-all duration-300"
            >
            <span className="text-[15px] ml-[6px]">Reach Out</span>
            </a>

          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy;2025 Tapasya&apos;s Portfolio Hub. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
