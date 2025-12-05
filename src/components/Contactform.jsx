import React from 'react';
import contactus from '../assets/images/contact.webp';

const Contactform = () => {
  return (
    <div className="w-full bg-black py-12 px-4 sm:px-6 lg:px-20 pt-30">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-10">

          {/* FORM SECTION */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div>
              <h2 className="text-xl bg-gradient-to-r from-[#9016B5] to-[#245EBD] text-transparent bg-clip-text border border-gray-500/40 px-3 py-2.5 inline-block">
                Contact us
              </h2>

              <h2 className="text-4xl sm:text-7xl font-bold leading-tight mt-2">
                <span className="text-white">Get In</span>
                <span className="bg-gradient-to-r from-[#9016B5] to-[#245EBD] text-transparent bg-clip-text">
                  {" "}Touch
                </span>
              </h2>

              <p className="text-gray-300 text-[15px] mt-3">
                Have questions about our IT solutions? Our team is ready to help 
                you with consultation, project inquiries, or technical support.
              </p>
            </div>

            <div className="border border-gray-500/40 rounded-2xl p-6 bg-[#121721] h-full">
              <form className="flex flex-col gap-4">
                {/* Name Fields */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label className="text-gray-200 block mb-2">First Name</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full bg-[#080F20] border border-gray-500/40 text-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#9016B5] transition-colors duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-gray-200 block mb-2">Last Name</label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full bg-[#080F20] border border-gray-500/40 text-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#9016B5] transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Email & Subject */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label className="text-gray-200 block mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-[#080F20] border border-gray-500/40 text-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#9016B5] transition-colors duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-gray-200 block mb-2">Subject</label>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full bg-[#080F20] border border-gray-500/40 text-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#9016B5] transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Comments */}
                <div>
                  <label className="text-gray-200 block mb-2">Comments</label>
                  <textarea
                    placeholder="Comments"
                    className="w-full bg-[#080F20] border border-gray-500/40 text-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#9016B5] transition-colors duration-300 h-32"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  className="cursor-pointer w-full sm:w-auto bg-gradient-to-r from-[#9016B5] to-[#245EBD] text-white px-6 py-3 rounded-md font-semibold
                    transition-all duration-300 border border-transparent hover:bg-transparent hover:text-transparent hover:bg-clip-text hover:border-[#9016B5]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="w-full lg:w-1/2 relative">
            <img
              src={contactus}
              alt="Contact"
              className="rounded-xl w-full h-full object-cover"
            />
            <div className="absolute inset-0 rounded-xl"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contactform;
