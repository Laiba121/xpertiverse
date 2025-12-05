import React from "react";
import { HERO_CONTENT } from "../utils/constants/text";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  // Motion variants
  const fadeUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section className="relative min-h-screen pt-40 px-4 sm:px-6 lg:px-20 py-20 flex flex-col lg:flex-row lg:items-center text-white overflow-hidden">

      {/* Background Video */}
      <motion.video
        src="/videos/hero-bg5.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-placeholder.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Dark Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/80 z-[1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1 }}
      />

      {/* Main Content */}
      <motion.div
        className="w-full mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 relative z-[2]"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >

        {/* Left Content */}
        <motion.div
          className="w-full flex flex-col items-center text-center lg:text-left"
        >
          <motion.p
            variants={fadeUp}
            className="bg-gradient-to-r from-[#9016B5] to-[#245EBD] bg-clip-text text-transparent mb-1 text-base font-medium border border-[#1E293B] rounded-2xl px-2.5 py-3"
          >
            {HERO_CONTENT.badge}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-semibold block text-white whitespace-nowrap text-[2rem] sm:text-[3rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[6rem]"
          >
            {HERO_CONTENT.heading1}
          </motion.h1>

          <motion.h1
            variants={fadeUp}
            className="font-semibold -mt-2 lg:-mt-8 leading-tight sm:leading-tight lg:leading-relaxed bg-gradient-to-r from-[#9016B5] to-[#245EBD] bg-clip-text text-transparent whitespace-nowrap text-[2rem] sm:text-[3rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[6rem]"
          >
            {HERO_CONTENT.heading2}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-gray-300 text-2xl mb-12 leading-relaxed max-w-4xl mx-auto lg:mx-0"
          >
            {HERO_CONTENT.description}
          </motion.p>

     <motion.div
  variants={fadeUp}
  className="flex flex-col sm:flex-row gap-4 w-full justify-center"
>
  {/* Primary Button */}
 <Link
  to="/contact"
  className="
    relative overflow-hidden px-7 py-3 rounded-md w-full sm:w-auto text-center text-xl font-medium
    bg-gradient-to-r from-[#9016B5] to-[#245EBD] text-white border border-transparent
    transition-all duration-300 ease-in-out
    hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50
    before:absolute before:top-0 before:left-0 before:w-0 before:h-full
    before:bg-gradient-to-r before:from-[#ffffff30] before:to-[#ffffff10] before:animate-glowLine
    hover:before:w-full
  "
>
  {HERO_CONTENT.buttons.primary}
</Link>


 <Link
  to="/aboutdetail"
  className="
    relative overflow-hidden px-7 py-3 rounded-md w-full sm:w-auto text-center text-xl font-medium
    border border-[#9016B5] bg-transparent text-[#9016B5] transition-all duration-300 ease-in-out
    hover:bg-gradient-to-r hover:from-[#9016B5] hover:to-[#245EBD] hover:text-white
    hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50
  "
>
  {HERO_CONTENT.buttons.secondary}
</Link>

</motion.div>

</motion.div>
      </motion.div>

      {/* Keyframes */}
      <style jsx>{`
       @keyframes glowLine {
  0% { left: -100%; width: 0; opacity: 0; }
  50% { left: 0; width: 100%; opacity: 0.5; } /* lighter glow at peak */
  100% { left: 100%; width: 0; opacity: 0; }
}
.before\:animate-glowLine::before {
  animation: glowLine 2s linear infinite;
}

      `}</style>
    </section>
  );
};

export default HeroSection;
