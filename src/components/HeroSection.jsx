import React from "react";
import { HERO_CONTENT } from "../utils/constants/text";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
<section className="relative min-h-screen px-4 sm:px-6 lg:px-20 py-20 flex flex-col lg:flex-row lg:items-center text-white overflow-hidden">

  {/* Background Video */}
  <video
    src="/videos/hero-bg5.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/80 z-[1]"></div>

  {/* Main Content */}
  <div className="container max-w-7xl mx-auto flex flex-col-reverse justify-center lg:flex-row items-center gap-12 relative z-[2]">

    {/* Left Content */}
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="lg:w-1/2 flex flex-col items-center text-center"
    >
      <p className="text-[#9016B5] mb-4 text-base font-medium border border-[#1E293B] rounded-2xl px-2.5 py-3">
        {HERO_CONTENT.badge}
      </p>

      <h1 className="text-3xl sm:text-4xl lg:text-7xl font-semibold block text-white whitespace-nowrap">
        {HERO_CONTENT.heading1}
      </h1>

      <h1 className="text-3xl sm:text-4xl lg:text-7xl font-semibold mb-4 leading-tight sm:leading-tight lg:leading-relaxed bg-linear-to-r from-[#9016B5] to-[#245EBD] bg-clip-text text-transparent whitespace-nowrap">
        {HERO_CONTENT.heading2}
      </h1>

      <p className="text-gray-300 text-lg mb-6">
        {HERO_CONTENT.description}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
        <Link
          to="/contact"
          className="cursor-pointer bg-[#9016B5] text-white border border-transparent
          hover:border-[#9016B5] hover:text-[#9016B5] hover:bg-transparent
          transition px-6 py-2 rounded-md hover:opacity-90 w-full sm:w-auto text-center"
        >
          {HERO_CONTENT.buttons.primary}
        </Link>

        <Link
          to="/aboutdetail"
          className="border border-[#9016B5] text-[#9016B5]
          hover:bg-[#9016B5] hover:cursor-pointer hover:text-gray-900
          transition px-6 py-2 rounded-md font-medium w-full sm:w-auto text-center"
        >
          {HERO_CONTENT.buttons.secondary}
        </Link>
      </div>
    </motion.div>

  </div>
</section>
  );
};

export default HeroSection;
