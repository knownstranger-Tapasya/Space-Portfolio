'use client'
import { Socials } from '@/constants'
import Image from 'next/image'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-6">
      <div className="w-full h-full flex items-center justify-between">
        
        {/* Logo */}
        <a href="#about-me" className="flex items-center w-12 h-12 overflow-hidden">
        <Image
          src="/NavLogo.jpg"
          alt="logo"
          width={48}
          height={48}
          className="cursor-pointer rounded-full transform transition-transform duration-500 ease-out hover:scale-200 hover:translate-x--1 hover:translate-y-1"
        />
          <span className="font-extrabold ml-2 text-white md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-purple-300 md:via-pink-300 md:to-white text-lg sm:text-xl tracking-wide">
            Tapasya Baidya
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-gray-200 border border-[#7042f861] bg-[#0300145e] px-6 py-2 rounded-full text-sm md:text-base">
          <a href="#about-me" className="cursor-pointer">About me</a>
          <a href="#experience" className="cursor-pointer">Experience</a>
          <a href="#education" className="cursor-pointer">Education</a>
          <a href="#skills" className="cursor-pointer">Skills</a>
          <a href="#projects" className="cursor-pointer">Projects</a>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex gap-5">
          {Socials.map((social) => (
            <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer">
              <Image src={social.src} alt={social.name} width={24} height={24} className="hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>
      </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 px-6 py-4 bg-gradient-to-r from-violet-950 to-indigo-800 text-white rounded-3xl shadow-2xl transform transition-all duration-500 ease-in-out flex flex-col items-center gap-6 w-[80%] sm:w-[60%] mx-auto">
            <a 
              href="#about-me" 
              onClick={() => setIsOpen(false)} 
              className="text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              About me
            </a>
            <a 
              href="#experience" 
              onClick={() => setIsOpen(false)} 
              className="text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Experience
            </a>
            <a 
              href="#education" 
              onClick={() => setIsOpen(false)} 
              className="text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Education
            </a>
            <a 
              href="#skills" 
              onClick={() => setIsOpen(false)} 
              className="text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              onClick={() => setIsOpen(false)} 
              className="text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Projects
            </a>
            
            {/* Social Icons */}
            <div className="flex gap-4 pt-4 justify-center">
              {Socials.map((social) => (
                <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-all duration-300">
                  <Image src={social.src} alt={social.name} width={24} height={24} />
                </a>
              ))}
            </div>
          </div>
        )}


        </div>
      )
    }

export default Navbar
