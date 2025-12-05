import React from "react";
import { Crosshair, Eye, Heart, Globe } from "lucide-react";
import {
  ABOUT_PAGE,
  DIFFERENCE_ITEMS,
  MISSION_VISION_VALUES,
  CORE_VALUES,
  GLOBAL_LOCATIONS,
} from "../utils/constants/text";

// Map icon strings → actual Lucide components
const iconMap = {
  rocket: <Globe size={42} className="text-gradient from-[#9016B5] to-[#245EBD]" />,
  briefcase: <Globe size={42} className="text-gradient from-[#9016B5] to-[#245EBD]" />,
  barchart: <Globe size={42} className="text-gradient from-[#9016B5] to-[#245EBD]" />,
};

const AboutDetail = () => {
  return (
    <div className="w-full bg-[#080F20] py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-6">

        {/* Header Section */}
        <div className="mt-10">
          <span className="text-white text-lg font-semibold border border-transparent hover:border-[#9016B5] px-2 py-3 transition">
            {ABOUT_PAGE.subtitle}
          </span>

          <h2 className="text-4xl font-bold mt-7 bg-gradient-to-r from-[#9016B5] to-[#245EBD] bg-clip-text text-transparent">
            {ABOUT_PAGE.title}
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed mt-6">
            {ABOUT_PAGE.description}
          </p>
        </div>

        {/* Overview Section */}
        <section className="w-full bg-[#0D1526] text-white py-20 px-6 rounded-xl">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                <span className="text-white">{ABOUT_PAGE.title}</span>{" "}
                <span className="bg-gradient-to-r from-[#9016B5] to-[#245EBD] text-transparent bg-clip-text">
                  Overview
                </span>
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-6 text-justify">
                {ABOUT_PAGE.overview.text}
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src={ABOUT_PAGE.overview.image}
                alt="About Xpertiverse"
                className="w-full max-w-[450px] rounded-xl object-cover shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="text-white bg-[#0E1A2A] py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              <span className="text-white">What Makes</span>{" "}
              <span className="bg-gradient-to-r from-[#9016B5] to-[#245EBD] text-transparent bg-clip-text">
                Us Different
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-10 mt-10">
              {DIFFERENCE_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-white bg-[#121721] p-8 rounded-2xl border border-[#1A2438] hover:border-[#9016B5] hover:scale-105 transition-all duration-300"
                >
                  <div className="p-4 bg-gradient-to-r from-[#9016B5] to-[#245EBD] rounded-full shadow-md mb-4">
                    {iconMap[item.icon]}
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm max-w-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Vision Values */}
        <section className="bg-[#080F20] w-full py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              <span className="text-white">Our Core</span>
              <br />
              <span className="bg-gradient-to-r from-[#9016B5] to-[#245EBD] text-transparent bg-clip-text">
                Mission, Visions & Values
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Mission */}
              <div className="bg-[#0D1526] p-8 rounded-3xl border border-[#1A2438] hover:border-[#9016B5] transition-all duration-300">
                <div className="bg-gradient-to-r from-[#9016B5] to-[#245EBD] rounded-full p-3 inline-flex items-center justify-center mb-4">
                  <Crosshair className="text-white" size={30} />
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4">
                  {MISSION_VISION_VALUES.mission.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {MISSION_VISION_VALUES.mission.desc}
                </p>
              </div>

              {/* Vision */}
              <div className="bg-[#0D1526] p-8 rounded-3xl border border-[#1A2438] hover:border-[#9016B5] transition-all duration-300">
                <div className="bg-gradient-to-r from-[#9016B5] to-[#245EBD] rounded-full p-3 inline-flex items-center justify-center mb-4">
                  <Eye className="text-white" size={30} />
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4">
                  {MISSION_VISION_VALUES.vision.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {MISSION_VISION_VALUES.vision.desc}
                </p>
              </div>

              {/* Values */}
              <div className="bg-[#0D1526] p-8 rounded-3xl border border-[#1A2438] hover:border-[#9016B5] transition-all duration-300">
                <div className="bg-gradient-to-r from-[#9016B5] to-[#245EBD] rounded-full p-3 inline-flex items-center justify-center mb-4">
                  <Heart className="text-white" size={30} />
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4">
                  Our Values
                </h3>

                <ul className="text-gray-300 leading-relaxed list-disc pl-6 space-y-1">
                  {MISSION_VISION_VALUES.values.map((val, i) => (
                    <li key={i}>{val}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Global Reach */}
        <section className="bg-[#0E1A2A] text-white py-20 px-6">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 text-center">
            <span className="text-white">Our</span>{" "}
            <span className="bg-gradient-to-r from-[#9016B5] to-[#245EBD] text-transparent bg-clip-text">
              Global Reach
            </span>
          </h2>

          <p className="text-gray-400 mb-12 text-lg text-center">
            Operating from strategic locations worldwide
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {GLOBAL_LOCATIONS.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-[#121721] p-10 border border-[#1A2438] hover:border-[#9016B5] transition-all duration-300 cursor-pointer"
              >
                <Globe size={50} className="text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white text-center">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutDetail;
