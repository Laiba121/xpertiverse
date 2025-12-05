import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Logo from "../../assets/images/Logo.png";
import { HEADER_CONTENT } from "../../utils/constants/text";
import { HERO_CONTENT } from "../../utils/constants/text"; 
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const { logo, tagline, mainMenu, buttonText } = HEADER_CONTENT;
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobileMenuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (id) => {
    if (id === "contact") {
      navigate("/contact");
      setMobileMenu(false);
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
    setMobileMenu(false);
  };

  useEffect(() => {
    const handler = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full bg-black px-4 sm:px-6 lg:px-20 text-white fixed top-0 left-0 z-50 shadow-lg"
    >
      <nav className="container max-w-7xl mx-auto flex justify-between items-center py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} className="w-20 h-12 object-contain" />
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">{logo}</h2>
            <p className="text-xs bg-gradient-to-r from-[#9016B5] to-[#245EBD] bg-clip-text text-transparent">{tagline}</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-sm">
          {mainMenu.map((item, i) => (
            <li
              key={i}
              className="cursor-pointer nav-underline hover:text-[#9016B5]"
              onClick={() => handleNavigation(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Desktop Button → hidden on mobile */}
        <Link
          to="/contact"
          className={`hidden lg:inline-block
            relative overflow-hidden px-6 py-2 rounded-md text-lg font-medium
            bg-gradient-to-r from-[#9016B5] to-[#245EBD] text-white border border-transparent
            transition-all duration-300 ease-in-out
            hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50
            before:absolute before:top-0 before:left-0 before:w-0 before:h-full
            before:bg-gradient-to-r before:from-[#ffffff30] before:to-[#ffffff10] before:animate-glowLine
            hover:before:w-full
          `}
        >
          {HERO_CONTENT.buttons.primary}
        </Link>

        {/* Mobile Menu Icon */}
        <button className="lg:hidden text-[#9016B5] text-2xl" onClick={() => setMobileMenu(true)}>
          <FaBars />
        </button>
      </nav>

      {/* Mobile Slide Menu */}
      <motion.div
        ref={mobileMenuRef}
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: mobileMenu ? 0 : 500, opacity: mobileMenu ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 right-0 h-full w-64 bg-[#0B0F19] z-50 shadow-lg px-6 py-6 flex flex-col"
      >
        <div className="flex justify-end mb-6">
          <FaTimes size={22} className="cursor-pointer text-[#9016B5]" onClick={() => setMobileMenu(false)} />
        </div>

        <ul className="flex flex-col gap-5 text-md flex-1">
          {mainMenu.map((item, i) => (
            <li
              key={i}
              className="cursor-pointer hover:text-[#9016B5]"
              onClick={() => handleNavigation(item.id)}
            >
              {item.label}
            </li>
          ))}

          {/* Mobile Only Button */}
          <button
            onClick={() => navigate("/contact")}
            className="
              relative overflow-hidden px-6 py-2 rounded-md w-full text-center text-white
              bg-gradient-to-r from-[#9016B5] to-[#245EBD]
              transition-all duration-300 ease-in-out mt-4
              hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50
              before:absolute before:top-0 before:left-0 before:w-0 before:h-full
              before:bg-gradient-to-r before:from-[#ffffff30] before:to-[#ffffff10] before:animate-glowLine
              hover:before:w-full
            "
          >
            {buttonText}
          </button>
        </ul>
      </motion.div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes glowLine {
          0% { left: -100%; width: 0; opacity: 0; }
          50% { left: 0; width: 100%; opacity: 0.5; }
          100% { left: 100%; width: 0; opacity: 0; }
        }
        .before\\:animate-glowLine::before {
          animation: glowLine 2s linear infinite;
        }

        /* Nav underline animation */
        .nav-underline::after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          background: linear-gradient(to right, #9016B5, #245EBD);
          transition: width 0.3s;
          margin-top: 4px;
        }
        .nav-underline:hover::after {
          width: 100%;
        }
      `}</style>
    </motion.header>
  );
};

export default Header;
