import React from 'react';
import { Settings, MonitorCheck, Headphones, Users, Building2, Signal } from 'lucide-react';

const services = [
  {
    icon: <Building2 className="w-10 h-10 text-blue-400" />,
    title: 'Network Installation',
    description:
      'End-to-end network setup for offices, institutions, and enterprises with structured cabling and reliable connectivity.',
  },
  {
    icon: <MonitorCheck className="w-10 h-10 text-cyan-400" />,
    title: 'Network Monitoring',
    description:
      '24/7 monitoring services to detect, prevent, and resolve issues before they impact your operations.',
  },
  {
    icon: <Signal className="w-10 h-10 text-sky-400" />,
    title: 'Wireless Solutions',
    description:
      'Design and deployment of enterprise-grade Wi-Fi and wireless connectivity for large-scale networks.',
  },
  {
    icon: <Settings className="w-10 h-10 text-green-400" />,
    title: 'Configuration & Optimization',
    description:
      'Optimizing routers, switches, and firewalls for maximum performance, reliability, and uptime.',
  },
  {
    icon: <Users className="w-10 h-10 text-violet-400" />,
    title: 'IT Consulting',
    description:
      'Professional consulting for IT infrastructure design, upgrades, and security strategy development.',
  },
  {
    icon: <Headphones className="w-10 h-10 text-orange-400" />,
    title: 'Customer Support & Maintenance',
    description:
      'Dedicated technical support and preventive maintenance for long-term network stability and efficiency.',
  },
];

const Service = () => {
  return (
    <section className="py-5 bg-black text-gray-300 duration-300 relative overflow-hidden">
      {/* Optional subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-black to-black opacity-90"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-white">
          Our Services
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Explore our range of professional networking services designed to keep your business connected, secure, and efficient.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-2 transition duration-300 text-left"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
