import React from "react";
import { motion } from "framer-motion";
import { TEAM_CONTENT } from "../utils/constants/text";
import { AppIcons } from "../components/ui/AppIcons"; 
import { useNavigate } from "react-router-dom";

export default function TeamSection() {
  const navigate = useNavigate();
  const { sectionTag, heading, heading1, description, teamMembers } = TEAM_CONTENT;

  return (
    <section className="w-full bg-black text-white py-24 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Top Buttons */}
        <div className="flex justify-between items-center mb-10">
          <button className="bg-gradient-to-r from-[#9016B5] to-[#245EBD] bg-clip-text text-transparent border border-gray-700 px-6 py-2 rounded-lg text-sm xl:text-xl font-semibold">
            {sectionTag}
          </button>

          <button
  onClick={() => navigate("/all-team-members")}
  className="
    relative overflow-hidden px-6 py-3 rounded-lg w-full sm:w-auto text-center text-lg font-medium
    border border-[#9016B5] bg-transparent text-white
    transition-all duration-300 ease-in-out
    bg-gradient-to-r from-[#9016B5] to-[#245EBD] cursor-pointer
    hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50
    before:absolute before:top-0 before:left-0 before:w-0 before:h-full
    before:bg-gradient-to-r before:from-[#ffffff30] before:to-[#ffffff10] before:animate-glowLine
    hover:before:w-full
  "
>
  Learn More
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

        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-7xl font-bold leading-tight mb-6">
          <span className="text-white">{heading}</span><br />
          <span className="bg-gradient-to-r from-[#9016B5] to-[#245EBD] text-transparent bg-clip-text">
            {heading1}
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-300 max-w-3xl mb-14">{description}</p>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.slice(0, 4).map((member, i) => {
            const { Fb, Twitter, Pinterest } = AppIcons;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl border border-[#1E293B] hover:border-gradient-to-r hover:from-[#9016B5] hover:to-[#245EBD] bg-[#121721] overflow-hidden shadow-xl"
              >
                {/* Hover Area Only On Image */}
                <div className="relative h-80 p-4 w-full overflow-hidden group text-center">

                  {/* Image */}
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-3xl"
                  />

                  {/* Overlay */}
                  <div
                    className="
                      absolute bottom-0 left-0 right-0 
                      bg-black/50 
                      h-22 group-hover:h-35
                      transition-all duration-900 
                      flex flex-col justify-end
                      group-hover:pb-10 
                    "
                  >
                    <h3 className="text-xl font-semibold text-white transition-all duration-900 group-hover:-translate-y-2">
                      {member.name}
                    </h3>
                    <p className="text-white text-sm transition-all duration-900 group-hover:-translate-y-2">
                      {member.role}
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-3 opacity-0 justify-center translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      <Fb className="text-white text-3xl cursor-pointer p-1 bg-gradient-to-r from-[#9016B5] to-[#245EBD] rounded-full" />
                      <Twitter className="text-white text-3xl cursor-pointer p-1 bg-gradient-to-r from-[#9016B5] to-[#245EBD] rounded-full" />
                      <Pinterest className="text-white text-3xl cursor-pointer p-1 bg-gradient-to-r from-[#9016B5] to-[#245EBD] rounded-full" />
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
