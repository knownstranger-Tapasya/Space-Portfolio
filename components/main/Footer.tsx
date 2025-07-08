"use client";
import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaStackOverflow, FaTelegramPlane } from "react-icons/fa"; 
import { BsEnvelope, BsCalendar2Check } from "react-icons/bs"; 


const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-6">
      <div className="w-full flex flex-col items-center justify-center mx-auto">
        <div className="w-full flex flex-row items-center justify-around flex-wrap">
          
          {/* Community */}
          <div className="min-w-[200px] flex flex-col items-center">
            <div className="w-full bg-transparent text-gray-200 p-4">
              <div className="flex flex-col items-center">
                 <div className="font-bold text-lg">Community</div>

                  <a
                    href="https://github.com/knownstranger-Tapasya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center my-2 transition-all hover:text-cyan-400"
                  >
                    <RxGithubLogo />
                    <span className="text-[15px] ml-[6px]">Github</span>
                  </a>

                  <a
                    href="https://discord.com/channels/knownstranger1662"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center my-2 transition-all hover:text-cyan-400"
                  >
                    <RxDiscordLogo />
                    <span className="text-[15px] ml-[6px]">Discord</span>
                  </a>
                  
                  <a
                    href="https://stackoverflow.com/users/16920486/tapasya-baidya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center my-2 transition-all hover:text-cyan-400"
                  >
                    <FaStackOverflow />
                    <span className="ml-2 text-sm">StackOverflow</span>
                  </a>

                </div>
              </div>
        </div>

        {/* Social Media */}
        <div className="min-w-[200px] flex flex-col items-center">
          <div className="w-full bg-transparent text-gray-200 p-4">
            <div className="flex flex-col items-center">
              <div className="font-bold text-lg">Social Media</div>

              <a
                href="https://x.com/0KnownStranger0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center my-2 hover:text-cyan-400 transition"
              >
                <RxTwitterLogo />
                <span className="text-[15px] ml-[6px]">Twitter</span>
              </a>

              <a
                href="https://www.linkedin.com/in/tapasya-baidya/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center my-2 hover:text-cyan-400 transition"
              >
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">Linkedin</span>
              </a>
              
              <a
                href="https://www.instagram.com/_knownstranger_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center my-2 hover:text-cyan-400 transition"
              >
                <RxInstagramLogo />
                <span className="ml-2 text-sm">Instagram</span>
              </a>

            </div>
          </div>
        </div>

          {/* Contact */}
          <div className="min-w-[200px] flex flex-col items-center">
            <div className="w-full bg-transparent text-gray-200 p-4">
              <div className="flex flex-col items-center">
                <div className="font-bold text-lg mb-2">Contact</div>
                <a
                  href="mailto:tapasyabaidya@gmail.com?subject=Let's%20Connect&body=Hi%20Tapasya%2C%20I%20checked%20out%20your%20portfolio%20and..."
                  className="flex items-center my-2 hover:text-cyan-400 cursor-pointer transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsEnvelope />
                  <span className="ml-2 text-sm">Reach Out</span>
                </a>

                <a
                  href="https://calendly.com/mailrip00"
                  className="flex items-center my-2 hover:text-cyan-400 cursor-pointer transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsCalendar2Check />
                  <span className="ml-2 text-sm">Book a Meeting</span>
                </a>

                <a
                  href="https://t.me/KNOWNSTRANGER1"
                  className="flex items-center my-2 hover:text-cyan-400 cursor-pointer transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegramPlane />
                  <span className="ml-2 text-sm">Message on Telegram</span>
                </a>

               
                </div>
              </div>
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
