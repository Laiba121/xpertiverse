import React from "react";
import { FOOTER_CONTENT } from "../../utils/constants/text";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function FooterSection() {
  const { logo, tagline, description, navigation, copyright } = FOOTER_CONTENT;

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (id) => {
    if (id === "contact") {
      navigate("/contact");
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
        }
      }, 300);
    } else {
      const section = document.getElementById(id);
      if (section) {
        window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
      }
    }
  };

  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
  const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };

  return (
    <motion.footer
      className="bg-black text-gray-200 py-16 px-4 sm:px-6 lg:px-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">

        {/* Column 1 – Logo & Description */}
        <motion.div variants={item}>
          <div className="flex items-center gap-3 mb-4">
            <div className="text-3xl text-[#9016B5]">🔗</div>
            <h3 className="text-2xl font-semibold text-white">{logo}</h3>
          </div>

          <h3 className="text-xl bg-gradient-to-r from-[#9016B5] to-[#245EBD] bg-clip-text text-transparent">
            {tagline}
          </h3>

          <p className="text-gray-400 pt-4 max-w-sm">{description}</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#9016B5] flex items-center justify-center text-[#9016B5] cursor-pointer hover:scale-110 transition">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#9016B5] flex items-center justify-center text-[#9016B5] cursor-pointer hover:scale-110 transition">
              <FaLinkedinIn />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#9016B5] flex items-center justify-center text-[#9016B5] cursor-pointer hover:scale-110 transition">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#9016B5] flex items-center justify-center text-[#9016B5] cursor-pointer hover:scale-110 transition">
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        {/* Column 2 – Navigation */}
        <motion.div variants={item}>
          <h4 className="text-xl font-semibold text-white mb-4">Navigation</h4>
          <ul className="space-y-3 text-gray-400">
            {navigation.map((item, index) => {
              let id = item.toLowerCase().replace(" ", "");
              return (
                <li
                  key={index}
                  onClick={() => handleNavigation(id)}
                  className="cursor-pointer hover:text-[#9016B5] transition"
                >
                  → {item}
                </li>
              );
            })}
          </ul>
        </motion.div>

        {/* Column 3 – Get In Touch */}
        <motion.div variants={item}>
          <h4 className="text-xl font-semibold text-white mb-4">Get In Touch</h4>
          <div className="space-y-6 text-gray-400">
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-[#9016B5] mt-1" />
              <div>
                <p className="text-gray-300">Email</p>
                <a href="mailto:info@company.com" className="hover:text-[#9016B5]">info@company.com</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaPhone className="text-[#9016B5] mt-1" />
              <div>
                <p className="text-gray-300">Phone</p>
                <a href="tel:+1234567890" className="hover:text-[#9016B5]">+1 (234) 567-890</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#9016B5] mt-1" />
              <div>
                <p className="text-gray-300">Location</p>
                <p>123 Business Ave, Suite 100</p>
                <p>New York, NY 10001</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom Row – Copyright & Links */}
      <div className="mt-16 border-t border-gray-700 pt-6 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
        <div>{copyright}</div>
        <div className="flex gap-6 mt-2 sm:mt-0">
          <a href="/terms" className="hover:text-[#9016B5] transition">Terms & Services</a>
          <a href="/privacy" className="hover:text-[#9016B5] transition">Privacy Policy</a>
          <a href="/cookies" className="hover:text-[#9016B5] transition">Cookie Policy</a>
        </div>
      </div>
    </motion.footer>
  );
}
