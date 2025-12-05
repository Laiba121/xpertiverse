import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";

import { companyContactData } from "../utils/constants/text";

const icons = {
  MdOutlineMail: <MdOutlineMail />,
  FiPhoneCall: <FiPhoneCall />,
  SlLocationPin: <SlLocationPin />,
};

const CompanyContact = () => {
  return (
    <div className="w-full bg-black py-8 px-4 sm:px-6 lg:px-20">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-6">

          {Object.values(companyContactData).map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-4 py-6 px-4 border border-gray-500/40 rounded-lg w-full lg:w-1/3"
            >
              <div className="flex flex-col">
                <h2 className="bg-gradient-to-r from-[#9016B5] to-[#245EBD] text-transparent bg-clip-text text-[25px] font-semibold">
                  {item.heading}
                </h2>

                {item.lines.map((line, i) => (
                  <span key={i} className="text-[#B2B3C7] text-[15px]">
                    {line}
                  </span>
                ))}

                {/* Example Image */}
                <img
                  src={item.image}
                  alt={item.heading}
                  className="w-14 mt-2"
                />
              </div>

              <div className="text-white text-[30px] bg-gradient-to-r from-[#9016B5] to-[#245EBD] px-5 py-4 rounded-lg flex items-center justify-center">
                {icons[item.icon]}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default CompanyContact;
