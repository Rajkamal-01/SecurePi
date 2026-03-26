import React from "react";
import { motion } from "framer-motion";
import {
  Settings,
  MonitorCheck,
  Headphones,
  Users,
  Building2,
  Signal,
  Shield,
  Cloud,
  Server,
} from "lucide-react";

const services = [
  {
    icon: <Building2 className="w-12 h-12 text-cyan-400" />,
    title: "Network Infrastructure Setup",
    description:
      "We provide structured cabling, LAN/WAN design, and complete network deployment ensuring fast, stable, and scalable connectivity.",
  },
  {
    icon: <MonitorCheck className="w-12 h-12 text-sky-400" />,
    title: "Network Monitoring & Management",
    description:
      "Proactive 24/7 network surveillance with real-time analytics to detect and prevent performance issues before they affect operations.",
  },
  {
    icon: <Signal className="w-12 h-12 text-blue-400" />,
    title: "Wi-Fi & Wireless Solutions",
    description:
      "Enterprise-grade wireless setup for offices, hotels, and campuses with optimized coverage, security, and bandwidth management.",
  },
  {
    icon: <Shield className="w-12 h-12 text-green-400" />,
    title: "Firewall & Cyber Security",
    description:
      "Next-gen firewall configuration, endpoint protection, and VPN solutions that keep your network and data safe from modern threats.",
  },
  {
    icon: <Cloud className="w-12 h-12 text-indigo-400" />,
    title: "Cloud Integration Services",
    description:
      "Seamless migration and integration of your IT infrastructure with secure and scalable cloud platforms like AWS and Azure.",
  },
  {
    icon: <Server className="w-12 h-12 text-violet-400" />,
    title: "Data Center Management",
    description:
      "Reliable data center operations, server optimization, and backup solutions that ensure 100% uptime and efficiency.",
  },
  {
    icon: <Users className="w-12 h-12 text-teal-400" />,
    title: "IT Consulting & AMC",
    description:
      "Expert consultation for IT strategy, infrastructure expansion, and annual maintenance contracts for hassle-free performance.",
  },
  {
    icon: <Headphones className="w-12 h-12 text-orange-400" />,
    title: "Dedicated Support & Maintenance",
    description:
      "Quick-response technical support, on-site troubleshooting, and preventive maintenance for continuous network reliability.",
  },
  {
    icon: <Settings className="w-12 h-12 text-yellow-400" />,
    title: "Configuration & Optimization",
    description:
      "Optimizing routers, switches, and firewalls for maximum performance, minimal latency, and top-tier reliability.",
  },
];

const Service = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-black via-gray-950 to-gray-900 text-gray-200 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,180,255,0.1),transparent_70%)]"></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
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
          className="text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          We deliver comprehensive networking and IT infrastructure solutions
          designed to build faster, smarter, and more secure digital ecosystems.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group bg-gradient-to-br from-gray-900/70 to-gray-800/40 border border-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-cyan-400/30 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Glowing Border Frame */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-400 to-indigo-500 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity"></div>

              <div className="relative z-10 text-left">
                <div className="p-3 rounded-xl bg-gray-800/60 w-fit mb-5 group-hover:bg-gray-700/70 transition">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;








// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Settings,
//   MonitorCheck,
//   Headphones,
//   Users,
//   Building2,
//   Signal,
//   Shield,
//   Cloud,
//   Server,
// } from "lucide-react";

// const services = [
//   {
//     icon: <Building2 className="w-10 h-10 text-cyan-400" />,
//     title: "Network Infrastructure Setup",
//     description:
//       "Complete wired & wireless network installation for modern enterprises ensuring speed, scalability, and security.",
//   },
//   {
//     icon: <MonitorCheck className="w-10 h-10 text-sky-400" />,
//     title: "Network Monitoring",
//     description:
//       "Real-time analytics and proactive alerts to ensure 24/7 uptime and rapid fault resolution.",
//   },
//   {
//     icon: <Shield className="w-10 h-10 text-green-400" />,
//     title: "Firewall & Security",
//     description:
//       "Advanced firewall and endpoint protection to safeguard your digital environment from evolving threats.",
//   },
//   {
//     icon: <Cloud className="w-10 h-10 text-indigo-400" />,
//     title: "Cloud Integration",
//     description:
//       "Hybrid cloud setups that enhance flexibility, optimize cost, and streamline your IT infrastructure.",
//   },
//   {
//     icon: <Signal className="w-10 h-10 text-blue-400" />,
//     title: "Wireless Solutions",
//     description:
//       "Optimized Wi-Fi and network access systems that provide seamless, secure connectivity anywhere.",
//   },
//   {
//     icon: <Users className="w-10 h-10 text-teal-400" />,
//     title: "IT Consulting & AMC",
//     description:
//       "Expert infrastructure strategy, design, and annual maintenance contracts for total reliability.",
//   },
//   {
//     icon: <Server className="w-10 h-10 text-violet-400" />,
//     title: "Data Center Management",
//     description:
//       "High-performance data center design, management, and maintenance for maximum efficiency.",
//   },
//   {
//     icon: <Headphones className="w-10 h-10 text-orange-400" />,
//     title: "Customer Support",
//     description:
//       "Dedicated engineers providing fast troubleshooting and ongoing support for your business.",
//   },
//   {
//     icon: <Settings className="w-10 h-10 text-yellow-400" />,
//     title: "Configuration & Optimization",
//     description:
//       "Fine-tuning network devices for top-tier performance and flawless connectivity.",
//   },
// ];

// const Service = () => {
//   return (
//     <section className="relative py-24 bg-black text-gray-300 overflow-hidden">
//       {/* Animated background grid */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,150,255,0.1),transparent_70%)]"></div>
//       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

//       {/* Floating glow lines */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.4 }}
//         transition={{ duration: 2 }}
//         className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,255,0.2),transparent_60%)] blur-3xl"
//       ></motion.div>

//       <div className="relative z-10 container mx-auto px-6 text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-2xl sm:text-4xl font-bold mb-4"
//         >
//           Powering Networks of the Future
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//           className="text-gray-400 max-w-3xl mx-auto mb-16"
//         >
//           Our intelligent networking ecosystem blends innovation, performance,
//           and security — delivering solutions that drive growth and reliability.
//         </motion.p>

//         {/* Network Node Grid */}
//         <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="relative flex flex-col items-center group"
//             >
//               {/* Glowing Circle Node */}
//               <div className="relative w-32 h-32 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-400/5 border border-cyan-500/20 hover:border-cyan-400/50 transition duration-500">
//                 <div className="absolute inset-0 rounded-full blur-2xl bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition"></div>
//                 {service.icon}
//               </div>

//               <h3 className="mt-6 text-xl font-semibold text-white">
//                 {service.title}
//               </h3>
//               <p className="text-gray-400 mt-2 text-sm max-w-xs">
//                 {service.description}
//               </p>

//               {/* Animated linking lines */}
//               <motion.span
//                 initial={{ scaleX: 0 }}
//                 whileInView={{ scaleX: 1 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="hidden lg:block absolute top-16 left-full w-24 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent origin-left opacity-40"
//               ></motion.span>
//             </motion.div>
//           ))}
//         </div>

//         {/* Center Glow Pulse */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: [0.2, 0.5, 0.2] }}
//           transition={{ repeat: Infinity, duration: 4 }}
//           className="absolute left-1/2 top-1/2 w-[300px] h-[300px] bg-cyan-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"
//         ></motion.div>
//       </div>
//     </section>
//   );
// };

// export default Service;
