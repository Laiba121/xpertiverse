import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { SERVICES_CONTENT } from "../utils/constants/text";
import { motion } from "framer-motion";

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = SERVICES_CONTENT.cards[id];

  if (!service)
    return (
      <p className="text-center text-red-500 mt-20">Service not found!</p>
    );

  const { longDesc, features, benefits, tools, images, testimonials, faq, pricing } = service.details;

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="w-full bg-[#080F20] text-white py-24 px-4 sm:px-6 lg:px-20">
      <motion.div className="max-w-7xl mx-auto flex flex-col space-y-16"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >

        {/* Back Button */}
        <motion.div className="w-full flex justify-start" variants={fadeUp}>
          <button
            onClick={() => navigate(-1)}
            className="mb-8 px-4 py-2 text-sm bg-gradient-to-r from-[#9016B5] to-[#245EBD] text-white rounded-lg hover:opacity-80 transition"
          >
            ← Back
          </button>
        </motion.div>

        {/* Service Header */}
        <motion.div className="text-center space-y-6" variants={fadeUp}>
          <div className="text-6xl mb-4 flex justify-center">
            {React.createElement(service.icon, { size: 60, className: "text-gradient from-[#9016B5] to-[#245EBD]" })}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="text-white">{service.heading1}</span>{" "}
            <span className="bg-gradient-to-r from-[#9016B5] to-[#245EBD] text-transparent bg-clip-text">
              {service.heading2}
            </span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            {service.desc}
          </p>
          <p className="text-gray-300 text-lg mt-4 max-w-3xl mx-auto">{longDesc}</p>
        </motion.div>

        {/* Images Section */}
        {images?.length > 0 && (
          <motion.div className="flex flex-wrap gap-6 justify-center" variants={fadeUp}>
            {images.map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt={service.title}
                className="rounded-2xl shadow-lg w-full sm:w-64 border border-transparent hover:border-gradient-to-r hover:from-[#9016B5] hover:to-[#245EBD]"
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </motion.div>
        )}

        {/* Features Section */}
        <motion.div variants={fadeUp}>
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#9016B5] to-[#245EBD] bg-clip-text text-transparent">Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-[#0E1A2A] p-6 rounded-3xl shadow-lg hover:scale-105 transition transform border border-transparent hover:border-gradient-to-r hover:from-[#9016B5] hover:to-[#245EBD]"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: idx * 0.1 } }}
              >
                <h3 className="text-xl font-semibold mb-3">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div variants={fadeUp}>
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#9016B5] to-[#245EBD] bg-clip-text text-transparent">Benefits</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                className="bg-[#0E1A2A] p-6 rounded-3xl shadow-lg hover:scale-105 transition transform border border-transparent hover:border-gradient-to-r hover:from-[#9016B5] hover:to-[#245EBD]"
              >
                <h3 className="text-xl font-semibold mb-3">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools Section */}
        <motion.div variants={fadeUp}>
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#9016B5] to-[#245EBD] bg-clip-text text-transparent">Tools & Technologies</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {tools.map((tool, idx) => (
              <motion.span
                key={idx}
                className="px-4 py-2 bg-[#0E1A2A] text-gray-300 rounded-2xl shadow hover:shadow-lg transition"
                whileHover={{ scale: 1.05, backgroundColor: "#9016B5", color: "#fff" }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        {testimonials?.length > 0 && (
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#9016B5] to-[#245EBD] bg-clip-text text-transparent">Client Testimonials</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {testimonials.map((t, idx) => (
                <motion.div
                  key={idx}
                  className="bg-[#0E1A2A] p-6 rounded-2xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: idx * 0.1 } }}
                >
                  <p className="text-gray-300 italic">"{t.feedback}"</p>
                  <h4 className="mt-2 font-semibold text-white">{t.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* FAQ Section */}
        {faq?.length > 0 && (
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#9016B5] to-[#245EBD] bg-clip-text text-transparent">FAQs</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {faq.map((item, idx) => (
                <motion.details
                  key={idx}
                  className="bg-[#0E1A2A] p-4 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: idx * 0.1 } }}
                >
                  <summary className="font-semibold cursor-pointer text-white">{item.question}</summary>
                  <p className="mt-2 text-gray-300">{item.answer}</p>
                </motion.details>
              ))}
            </div>
          </motion.div>
        )}

        {/* Pricing Section */}
        {pricing?.length > 0 && (
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#9016B5] to-[#245EBD] bg-clip-text text-transparent">Pricing</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pricing.map((p, idx) => (
                <motion.div
                  key={idx}
                  className="bg-[#0E1A2A] p-6 rounded-3xl shadow-lg hover:scale-105 transition transform border border-transparent hover:border-gradient-to-r hover:from-[#9016B5] hover:to-[#245EBD]"
                >
                  <h3 className="text-xl font-semibold mb-3">{p.plan}</h3>
                  <p className="text-gray-300 text-lg mb-2">{p.price}</p>
                  <ul className="list-disc list-inside text-gray-400">
                    {p.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Call-to-Action */}
        <motion.div className="text-center mt-12" variants={fadeUp}>
          <Link
            to="/contact"
            className="px-8 py-3 text-white bg-gradient-to-r from-[#9016B5] to-[#245EBD] rounded-full font-semibold hover:bg-transparent hover:text-[#9016B5] hover:border hover:border-[#9016B5] transition"
          >
            Contact Us for {service.title}
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
}
