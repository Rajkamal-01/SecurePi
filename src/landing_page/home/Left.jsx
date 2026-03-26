
import React from "react";
import { ShieldCheck, Server, Network, Lock } from "lucide-react";

const features = [
  {
    title: "Networking",
    description:
      "High-performance LAN, WAN, fiber, and enterprise network infrastructure solutions.",
    icon: <Network className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />,
  },
  {
    title: "Networks",
    description:
      "Reliable and scalable structured network design for offices, industries, and data-driven environments.",
    icon: <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" />,
  },
  {
    title: "Data Center",
    description:
      "Next-gen data center architecture, server racks, cooling solutions, and managed operations.",
    icon: <Server className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" />,
  },
  {
    title: "Cybersecurity",
    description:
      "Advanced protection solutions against cyber threats, vulnerabilities, and unauthorized access.",
    icon: <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-red-400" />,
  },
];

const Left = () => {
  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6 lg:px-16">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">
          What We Offer
        </h2>
        <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto">
          Premium networking and IT infrastructure solutions designed for
          businesses that demand performance and security.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col sm:flex-row items-start sm:items-center 
                       bg-gray-900/40 border border-gray-800 rounded-xl 
                       p-5 sm:p-6 hover:bg-gray-900 transition-all duration-300 
                       hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
          >
            
            {/* Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center 
                            bg-gray-800/50 rounded-xl mb-4 sm:mb-0 sm:mr-6 
                            group-hover:bg-gray-800 transition-all duration-300">
              {item.icon}
            </div>

            {/* Content */}
            <div className="w-full">
              <h3 className="text-lg sm:text-2xl font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Hover line */}
              <div className="h-[2px] w-0 group-hover:w-full bg-blue-500 transition-all mt-4"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Left;