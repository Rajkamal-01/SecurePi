import React from "react";
import { ShieldCheck, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";

const infoData = [
  {
    icon: <Rocket className="w-10 h-10 text-cyan-400" />,
    title: "A Growing & Dedicated Team",
    description:
      "We are a new and fast-growing networking service provider, built with a strong foundation of technical expertise, industry standards, and a passion for delivering reliable network solutions.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-sky-400" />,
    title: "Quality, Security & Reliability",
    description:
      "Even as a growing company, we prioritize secure network architecture, high availability, and best practices to ensure every solution is dependable and future-ready.",
  },
  {
    icon: <Users className="w-10 h-10 text-blue-400" />,
    title: "Client-Focused Approach",
    description:
      "We work closely with our clients to understand their needs, provide transparent communication, and deliver networking solutions that support long-term business growth.",
  },
];

const Info = () => {
  return (
    <section className="relative py-8 bg-black text-gray-200 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,150,255,0.12),transparent_70%)]"></div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-white">
            Choose SecurePi
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-3">
            A new-generation networking company built on trust, technology, and a commitment to excellence.
          </p>
        </motion.div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {infoData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/70 to-gray-800/40 border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-4 p-3 inline-flex rounded-xl bg-gray-800/70">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;
