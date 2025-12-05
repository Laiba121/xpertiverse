import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SERVICES_CONTENT } from "../utils/constants/text";

// Gradient Icon wrapper with pulse animation
const GradientIcon = ({ Icon, size = 40 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    animate={{ scale: [1, 1.1, 1], opacity: [1, 0.8, 1] }}
    transition={{ repeat: Infinity, duration: 2 }}
  >
    <defs>
      <linearGradient id="serviceIconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#9016B5" />
        <stop offset="100%" stopColor="#245EBD" />
      </linearGradient>
    </defs>
    <Icon
      width={size}
      height={size}
      fill="url(#serviceIconGradient)"
      stroke="url(#serviceIconGradient)"
      strokeWidth={1.5}
    />
  </motion.svg>
);

export default function ServicesSection() {
  const { sectionTag, heading, heading1, description, cards } = SERVICES_CONTENT;
  const navigate = useNavigate();

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotate: -2 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.6, delay: i * 0.15, type: "spring", bounce: 0.4 },
    }),
    hover: {
      scale: 1.07,
      rotate: [0, 1, -1, 0],
      boxShadow: "0 10px 25px -5px #9016B5, 0 15px 40px -10px #245EBD",
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const buttonHover = {
    scale: 1.05,
    y: [0, -2, 0],
    transition: { duration: 0.5, repeat: Infinity, repeatType: "mirror" },
  };

  return (
    <section className="w-full bg-black text-white py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">

        {/* TOP TEXT */}
        <div className="space-y-6 max-w-3xl">
          <button className="bg-gradient-to-r from-[#9016B5] to-[#245EBD] bg-clip-text text-transparent border border-[#1E293B] text-sm xl:text-xl font-semibold rounded-lg px-6 py-2">
            {sectionTag}
          </button>
          <h2 className="text-4xl sm:text-7xl whitespace-nowrap font-bold leading-tight">
            <span className="text-white">{heading}</span><br />
            <span className="bg-gradient-to-r from-[#9016B5] to-[#245EBD] text-transparent bg-clip-text">
              {heading1}
            </span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">{description}</p>
        </div>

        {/* CARDS */}
        <div className="flex flex-wrap w-full lg:w-4/5 gap-6 justify-center">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="p-10 rounded-xl border border-[#1E293B] flex flex-col justify-between w-full sm:w-[45%] lg:w-[30%] shadow-lg shadow-black/20 transition"
              style={{ height: "350px" }}
              custom={i}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div>
                <div className="mb-6 flex justify-center">
                  <GradientIcon Icon={card.icon} size={50} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-white">{card.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed text-center">{card.desc}</p>
              </div>

              <motion.button
                onClick={() => navigate(`/service/${i}`)}
                className="
                  mt-6 px-4 py-2 text-sm font-semibold rounded-lg 
                  bg-gradient-to-r from-[#9016B5] to-[#245EBD] text-white border border-transparent
                  relative overflow-hidden transition-all duration-300 ease-in-out cursor-pointer
                "
                whileHover={buttonHover}
              >
                View Details
                <span className="
                  absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-[#ffffff30] to-[#ffffff10] animate-glowLine
                  hover:w-full
                  transition-all duration-700
                " />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Keyframes for glow animation */}
      <style jsx>{`
        @keyframes glowLine {
          0% { left: -100%; width: 0; opacity: 0; }
          50% { left: 0; width: 100%; opacity: 0.5; }
          100% { left: 100%; width: 0; opacity: 0; }
        }
        .animate-glowLine {
          animation: glowLine 2s linear infinite;
        }
      `}</style>
    </section>
  );
}
