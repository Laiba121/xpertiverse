import React from "react";
import { NEWSLETTER_CONTENT } from "../utils/constants/text";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

export default function NewsletterSection() {
  const navigate = useNavigate();
  const { heading, heading1, description, buttonText } = NEWSLETTER_CONTENT;

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  // Parent container animation (staggered)
  const parentVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  // Fade up animation for elements
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="bg-black py-20 px-4 md:px-10 flex justify-center relative overflow-hidden">
      
      {/* Floating particles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-purple-500 rounded-full opacity-10 blur-2xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-2xl animate-float-slow"></div>

      {/* Gradient Border Wrapper */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={parentVariants}
        className="
          bg-gradient-to-r from-[#9016B5]/50 to-[#245EBD]/50
          p-[1.5px] rounded-3xl w-full max-w-6xl
        "
      >
        {/* Inner Black Box */}
        <div className="bg-black rounded-3xl py-20 px-6 md:px-16 text-center relative overflow-hidden">

          {/* Soft Glow Background */}
          <motion.div
            className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-[#9016B5]/30 to-[#245EBD]/30 blur-3xl opacity-20 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* Animated Content */}
          <motion.div
            variants={parentVariants}
            className="flex flex-col items-center gap-10"
          >
            {/* Heading + Description */}
            <motion.div variants={fadeUp} className="space-y-6 max-w-2xl">
              <motion.h2
                variants={fadeUp}
                whileHover={{ scale: 1.02, textShadow: "0px 0px 8px rgba(144,22,181,0.7)" }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
              >
                <span className="text-white">{heading}</span>
                <br />
                <span className="bg-gradient-to-r from-[#9016B5] to-[#245EBD] text-transparent bg-clip-text">
                  {heading1}
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-gray-300 text-lg leading-relaxed"
              >
                {description}
              </motion.p>
            </motion.div>

            {/* Button with pulsing glow */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full justify-center">
  {/* Primary Button */}
 {/* Buttons with Hero-style glow */}
<motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full justify-center">
  {/* Primary Button */}
  <button
    onClick={() => navigate("/contact")}
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
    {buttonText}
  </button>

  {/* Secondary Button */}
  <button
    onClick={() => navigate("/about")}
    className="
      relative overflow-hidden px-7 py-3 rounded-md w-full sm:w-auto text-center text-xl font-medium
      border border-[#9016B5] bg-transparent text-[#9016B5]
      transition-all duration-300 ease-in-out
      hover:bg-gradient-to-r hover:from-[#9016B5] hover:to-[#245EBD] hover:text-white
      hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50
    "
  >
    Explore Features
  </button>

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
</motion.div>

</motion.div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
