"use client";
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
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-6">
      <div className="w-full flex flex-col items-center justify-center mx-auto">
        <div className="w-full flex flex-row items-center justify-around flex-wrap">
          
          {/* Community */}
          <div className="min-w-[200px] flex flex-col items-center">
            <div className="font-bold text-[16px] mb-2">Community</div>

            <a
              href="https://stackoverflow.com/users/16920486/tapasya-baidya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 transition-all hover:text-cyan-400"
            >
              <FaStackOverflow />
              <span className="ml-2 text-[15px]">StackOverflow</span>
            </a>

            <a
              href="https://github.com/knownstranger-Tapasya/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 transition-all hover:text-cyan-400"
            >
              <RxGithubLogo />
              <span className="ml-2 text-[15px]">Github</span>
            </a>

            <a
              href="https://discord.com/channels/knownstranger1662"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 transition-all hover:text-cyan-400"
            >
              <RxDiscordLogo />
              <span className="ml-2 text-[15px]">Discord</span>
            </a>
          </div>

          {/* Social Media */}
          <div className="min-w-[200px] flex flex-col items-center">
            <div className="relative z-50 w-full bg-transparent text-gray-200 p-4">
              <div className="flex flex-col items-center">
               <div className="font-bold text-lg">Social Media</div>

                <a
                  href="https://www.instagram.com/_knownstranger_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center mt-2 hover:text-cyan-400 transition"
                >
                  <RxInstagramLogo />
                  <span className="ml-2 text-sm">Instagram</span></a>

                <a
                  href="https://x.com/0KnownStranger0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center mt-2 hover:text-cyan-400 transition"
                >
                  <RxTwitterLogo />
                  <span className="text-[15px] ml-[6px]">Twitter</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/tapasya-baidya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center mt-2 hover:text-cyan-400 transition"
                >
                  <RxLinkedinLogo />
                  <span className="text-[15px] ml-[6px]">Linkedin</span>
                </a>
              </div>
            </div>
          </div>


          {/* Contact */}
          <div className="min-w-[200px] flex flex-col items-center">
            <div className="font-bold text-[16px] mb-2">Contact</div>

            <p className="my-2 hover:text-cyan-400 cursor-pointer">About</p>
            <p className="my-2 hover:text-cyan-400 cursor-pointer">Learning About Me</p>

            <a
              href="mailto:tapasyabaidya@gmail.com?subject=Let's%20Connect&body=Hi%20Tapasya%2C%20I%20checked%20out%20your%20portfolio%20and..."
              className="my-2 hover:text-cyan-400 cursor-pointer"
            >
              Reach Out
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-[14px] text-gray-400">
          ©2025 Tapasya&apos;s Portfolio Hub. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
