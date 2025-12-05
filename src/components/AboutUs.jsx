import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";

import { FaLightbulb, FaHandshake } from "react-icons/fa";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoMdTrophy } from "react-icons/io";

import { ABOUT_INNOVATION } from "../utils/constants/text";
import Counter from "./Counter";

// Gradient Icon wrapper
const GradientIcon = ({ Icon, size = 32, className = "" }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    whileHover={{ scale: 1.2 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#9016B5" />
        <stop offset="100%" stopColor="#245EBD" />
      </linearGradient>
    </defs>
    <Icon
      width={size}
      height={size}
      fill="url(#iconGradient)"
      stroke="url(#iconGradient)"
      strokeWidth={1.5}
    />
  </motion.svg>
);

// ICON MAP
const mainIcons = {
  FaLightbulb: <GradientIcon Icon={FaLightbulb} size={50} />,
  FaHandshake: <GradientIcon Icon={FaHandshake} size={50} />,
};

const miniIcons = {
  FaHandsHoldingCircle: <GradientIcon Icon={FaHandsHoldingCircle} size={24} />,
  BsFillPersonCheckFill: <GradientIcon Icon={BsFillPersonCheckFill} size={24} />,
  VscWorkspaceTrusted: <GradientIcon Icon={VscWorkspaceTrusted} size={24} />,
  IoMdTrophy: <GradientIcon Icon={IoMdTrophy} size={24} />,
};

// Motion variants
const float = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const slideInLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, type: "spring", bounce: 0.3 } },
};

const slideInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, type: "spring", bounce: 0.3 } },
};

const CombinedAboutInnovation = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" });

  return (
    <section ref={sectionRef} className="bg-black text-white px-4 sm:px-6 lg:px-20 py-24">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <button className="bg-gradient-to-r from-[#9016B5] to-[#245EBD] bg-clip-text text-transparent border border-[#1E293B] text-sm xl:text-xl font-semibold rounded-lg px-5 py-1">
          {ABOUT_INNOVATION.badge}
        </button>

        <h2 className="text-4xl lg:text-7xl whitespace-nowrap font-bold leading-tight mt-4">
          <span className="text-white">{ABOUT_INNOVATION.headingWhite}</span>
          <br />
          <span className="bg-gradient-to-r from-[#9016B5] to-[#245EBD] bg-clip-text text-transparent">
            {ABOUT_INNOVATION.headingGradient}
          </span>
        </h2>

        <p className="text-gray-300 text-lg mt-4">{ABOUT_INNOVATION.description}</p>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* IMAGE */}
        <motion.div animate={float.animate} className="flex justify-center">
          <img
            src="/images/about-us3.jpg"
            alt="Innovation"
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-lg xl:max-w-xl h-64 sm:h-72 md:h-80 lg:h-80 xl:h-96 object-cover rounded-xl shadow-lg"
          />
        </motion.div>

        {/* TEXT / FEATURES */}
        <div className="space-y-8 text-left">
          {/* MAIN FEATURES */}
          <div className="space-y-4">
            {ABOUT_INNOVATION.features.map((item, i) => (
              <motion.div
                key={i}
                variants={slideInLeft}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ scale: 1.05, y: -3, boxShadow: "0 0 15px #9016B5" }}
                className="flex items-center gap-2 rounded-lg p-2 transition-all"
              >
                {mainIcons[item.icon] || <span className="w-12 h-12 inline-block" />}
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* MINI FEATURES */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 text-gray-300">
            {ABOUT_INNOVATION.miniFeatures.map((item, i) => (
              <motion.div
                key={i}
                variants={slideInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ scale: 1.05, x: 3 }}
                className="flex items-center gap-2 font-semibold rounded-lg p-1 transition-all text-sm sm:text-base"
              >
                {miniIcons[item.icon] || <span className="w-6 h-6 inline-block" />}
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* COUNTERS */}
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-8 pt-4">
            {ABOUT_INNOVATION.counters.map((item, i) => (
              <motion.div
                key={i}
                variants={slideInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ scale: 1.05, y: -3 }}
                className="flex flex-col items-start"
              >
                <p className="text-4xl font-bold">
                  <Counter to={item.value} start={isInView} />
                  {item.isPercent ? "%" : "+"}
                </p>
                <p className="bg-gradient-to-r from-[#9016B5] to-[#245EBD] bg-clip-text text-transparent">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* LEARN MORE BUTTON */}
          <motion.button
            variants={slideInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 20px -4px #9016B5, 0 12px 40px -8px #245EBD" }}
            className="
              relative overflow-hidden px-6 py-2 rounded-md w-full sm:w-auto text-center text-lg font-medium
              bg-gradient-to-r from-[#9016B5] to-[#245EBD] text-white border border-transparent
              transition-all duration-300 ease-in-out hover:cursor-pointer
              before:absolute before:top-0 before:left-0 before:w-0 before:h-full
              before:bg-gradient-to-r before:from-[#ffffff30] before:to-[#ffffff10] before:animate-glowLine
              hover:before:w-full
            "
            onClick={() => navigate("/aboutdetail")}
          >
            Learn More
          </motion.button>

          {/* Keyframes for glow animation */}
          <style jsx>{`
            @keyframes glowLine {
              0% { left: -100%; width: 0; opacity: 0; }
              50% { left: 0; width: 100%; opacity: 0.5; }
              100% { left: 100%; width: 0; opacity: 0; }
            }
            .before\\:animate-glowLine::before {
              animation: glowLine 2s linear infinite;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default CombinedAboutInnovation;
