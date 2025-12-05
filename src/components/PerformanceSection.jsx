import { PERFORMANCE_TEXT } from "../utils/constants/text";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function PerformanceSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  const statsVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const statItem = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    hover: {
      scale: 1.08,
      y: -5,
      textShadow: "0 0 15px #9016B5, 0 0 25px #245EBD",
      transition: { duration: 0.4, ease: "easeInOut" }
    }
  };

  return (
    <section ref={ref} className="bg-black text-white py-20 px-4 sm:px-6 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-0 xl:gap-8"
      >
        {/* Title + Description */}
        <div className="flex flex-col xl:flex-row gap-3 xl:gap-10 text-center lg:text-left w-full md:w-md xl:w-2xl">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl 2xl:text-4xl font-semibold leading-tight"
          >
            <span className="text-white whitespace-nowrap">
              {PERFORMANCE_TEXT.heading}
            </span><br />
            <span className="bg-gradient-to-r from-[#9016B5] to-[#245EBD] text-transparent bg-clip-text">
              {PERFORMANCE_TEXT.heading1}
            </span>
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 mt-0 xl:mt-4 lg:mx-0 text-base md:text-base"
          >
            {PERFORMANCE_TEXT.description}
          </motion.p>
        </div>

        {/* Stats Row */}
        <motion.div
          variants={statsVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center lg:justify-end gap-0 xl:gap-4 mt-8 lg:mt-0"
        >
          {PERFORMANCE_TEXT.stats.map((item, index) => {
            const numericValue = parseInt(item.number.replace(/\D/g, ""), 10);
            const symbol = item.number.replace(/\d/g, "");

            return (
              <motion.div
                key={index}
                variants={statItem}
                whileHover="hover"
                className="text-center lg:text-left w-32 sm:w-36 md:w-40 2xl:w-44 mb-6 lg:mb-0 cursor-pointer"
              >
                <h3 className="text-3xl 2xl:text-4xl font-semibold text-white">
                  {startCount ? <CountUp end={numericValue} duration={2} /> : 0}
                  {symbol}
                </h3>
                <p className="bg-gradient-to-r from-[#9016B5] to-[#245EBD] bg-clip-text text-transparent mt-1 text-sm 2xl:text-base font-semibold">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
