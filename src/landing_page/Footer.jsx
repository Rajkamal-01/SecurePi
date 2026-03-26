
import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
// import width_592 from "../assets/width_592.png";
import Securepi from "../assets/width_592.png"

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-gray-100 dark:bg-gray-900 dark:text-gray-300 text-gray-700 py-12 border-t border-gray-200 dark:border-gray-700 duration-300"
    >
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* --- Company Info --- */}
        <div>
           <Link to="/" className="flex items-center gap-3 cursor-pointer">
          
                    <img src={Securepi} alt="Logo" className="h-10" />
                    <p className="text-2xl font-semibold">
                      Secure<span className="font-bold text-blue-500">Pi</span>
                    </p>
                    </Link>
          <p className="text-sm leading-relaxed py-1">
            Delivering secure, scalable, and high-performance networking
            solutions across India — connecting people, data, and technology
            with trust.
          </p>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm ">
            <li >
              <Link to="/" className="hover:text-primary duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary duration-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-primary duration-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* --- Contact Info --- */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" />
              <span>Noida Sector 62, Uttar Pradesh, India</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-primary" />
              <span>+91 6398275011</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-primary" />
              <span>info@securepi.in</span>
            </li>
          </ul>
        </div>

        {/* --- Social Links --- */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>


          {/* <div className="flex gap-4"> */}
            {/* <a href="#" className="hover:text-primary duration-300">
              <FaFacebookF size={20} />
            </a> */}
            {/* <a href="https://www.linkedin.com/company/securepi" className="hover:text-primary duration-300">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://x.com/@securepi_" className="hover:text-primary duration-300">
              <FaTwitter size={20} />
            </a>
          </div> */}


          <div className="flex gap-4">
           <a
             href="https://www.linkedin.com/company/securepi"
             target="_blank"
             rel="noopener noreferrer"
             className="hover:text-primary duration-300 hover:scale-110 transition-transform"
             >
             <FaLinkedinIn size={20} />
             </a>

             <a
             href="https://x.com/@securepi_"
             target="_blank"
             rel="noopener noreferrer"
             className="hover:text-primary duration-300 hover:scale-110 transition-transform"
             >
             <FaTwitter size={20} />
             </a>
            </div>

        </div>
      </div>

      {/* --- Bottom Copyright --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-sm border-t border-gray-300 dark:border-gray-700 mt-10 pt-6"
      >
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-primary">SecurePi</span>. All rights
        reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
