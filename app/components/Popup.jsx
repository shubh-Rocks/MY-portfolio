"use client";

import React, { useRef, useState } from "react";
import { X } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Mongodb from "./tags/Mongodb";
import Node from "./tags/Node";
import Express from "./tags/Express";
import ReactTag from "./tags/ReactTag";

const Popup = ({ onClose }) => {
  const [isHovered, setIsHovered] = useState(false);

  const tags = [
    "javascript",
    "React.js",
    "redux",
    "Node.js",
    "Express.js",
    "Postgresql",
    "MongoDB",
    "mongoose",
    "Supabase",
    "Prisma",
    "HTML",
    "CSS",
    "Tailwind",
    "Git",
    "Github",
    "aws",
    "terminal",
    "Framer motion",
    "Figma",
  ];

  return (
    <div
      onClick={onClose}
      className="text-white flex justify-center items-center z-[100] fixed inset-0 backdrop-blur-3xl bg-black/40 p-4"
    >
      {/* Container: Changed w-10/12 to w-full max-w-5xl for better control */}
      <div
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
        className="bg-[#070707] rounded-3xl relative w-full max-w-5xl max-h-[90vh] overflow-y-auto lg:overflow-y-hidden overflow-x-hidden p-6 md:p-12 border border-white/10 shadow-2xl"
      >
        {/* Close Button: Positioned better for thumbs */}
        <motion.button
          className="absolute top-4 right-4 z-50 cursor-pointer p-2 rounded-full"
          onClick={onClose}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <X className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />
        </motion.button>

        {/* Content Grid: Image on top for mobile, right for desktop */}
        <div className="flex flex-col-reverse lg:flex-row gap-8 items-center lg:items-start">
          {/* Left Side: Text and Tags */}
          <div className="flex-1 space-y-6">
            <h1 className="text-2xl md:text-4xl font-bold text-orange-100">
              ABOUT ME
            </h1>

            <p className="text-sm md:text-base leading-relaxed text-gray-300">
              I help business owners and busy web developers to design & develop
              creative websites that fit their vision and attract visitors to
              stay forever. Passionate about Software Architecture, API design,
              and Open Source. Currently open to collaborations in Web
              Development and Software Engineering.Technologies and tools that I
              use to create such awesome websites.
            </p>

            {/* Tags: Centered on mobile, left on desktop */}
            <div className="flex flex-wrap gap-2 justify-start max-w-xl">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full border border-gray-700 bg-[#1e1e1e] text-white text-[10px] md:text-xs font-medium hover:border-orange-300 transition-colors cursor-default"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* MERN Icons Section */}
            <div className="pt-10">
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="flex items-center gap-4 md:gap-8 h-12 relative"
              >
                {isHovered && (
                  <div className="absolute -top-10  flex gap-5">
                    <Mongodb /> <ReactTag /> <Node /> <Express />
                  </div>
                )}
                {/* Responsive Icon Sizes */}
                {["mongodb", "express", "react", "node"].map((icon) => (
                  <div
                    key={icon}
                    className="w-7.5 h-8  md:w-12 md:h-12 relative"
                  >
                    <Image
                      src={`/icons/${icon}.svg`}
                      alt={icon}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>

              <div className="flex ml-1 lg:gap-10 gap-6.5 md:gap-12 md:ml-3 mt-4 font-bold tracking-[0.5em] md:tracking-[1em] text-lg md:text-2xl">
                <span className="text-[#47a248] ">M</span>
                <span>E</span>
                <span className="text-[#61dafb]">R</span>
                <span className="text-[#8cc84b] ">N</span>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-40 sm:w-60 md:w-80  lg:w-[400px] shrink-0">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/newcoder.jpg"
                alt="Contact me"
                width={500}
                height={600}
                className="rounded-2xl lg:mt-20 lg:ml-10 shadow-xl "
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
