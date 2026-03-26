import React from 'react';
import { motion } from 'framer-motion';
import { Settings, MonitorCheck, Headphones, Users, Building2, Signal } from 'lucide-react';

const services = [
  {
    icon: <Building2 className="w-12 h-12 text-blue-400" />,
    title: 'Network Installation',
    description:
      'End-to-end network setup for offices, institutions, and enterprises with structured cabling and reliable connectivity.',
  },
  {
    icon: <MonitorCheck className="w-12 h-12 text-cyan-400" />,
    title: 'Network Monitoring',
    description:
      '24/7 monitoring services to detect, prevent, and resolve issues before they impact your operations.',
  },
  {
    icon: <Signal className="w-12 h-12 text-sky-400" />,
    title: 'Wireless Solutions',
    description:
      'Design and deployment of enterprise-grade Wi-Fi and wireless connectivity for large-scale networks.',
  },
  {
    icon: <Settings className="w-12 h-12 text-green-400" />,
    title: 'Configuration & Optimization',
    description:
      'Optimizing routers, switches, and firewalls for maximum performance, reliability, and uptime.',
  },
  {
    icon: <Users className="w-12 h-12 text-violet-400" />,
    title: 'IT Consulting',
    description:
      'Professional consulting for IT infrastructure design, upgrades, and security strategy development.',
  },
  {
    icon: <Headphones className="w-12 h-12 text-orange-400" />,
    title: 'Customer Support & Maintenance',
    description:
      'Dedicated technical support and preventive maintenance for long-term network stability and efficiency.',
  },
];

const Service = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-gray-200 overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,150,255,0.15),transparent_70%)]"></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-4xl font-bold text-white mb-4"
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-400 max-w-2xl mx-auto mb-16"
        >
          Explore our range of professional networking services designed to keep your business connected, secure, and efficient.
        </motion.p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-gray-900/70 to-gray-800/40 border border-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-cyan-400/30 hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Glowing border frame effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 opacity-0 group-hover:opacity-10 blur-xl transition-opacity"></div>

              <div className="relative z-10 flex flex-col items-start space-y-4">
                <div className="p-3 rounded-xl bg-gray-800/60 group-hover:bg-gray-700/70 transition">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
