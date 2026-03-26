
import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "../../supabaseClient";

// import Img6 from "../../assets/Img6.webp"; // Replace with your image

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus("⚠️ Please fill in all fields.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(formData.email)) {
      setStatus("⚠️ Please enter a valid email address.");
      return false;
    }

    if (!phoneRegex.test(formData.phone)) {
      setStatus("⚠️ Please enter a valid 10-digit phone number.");
      return false;
    }

    return true;
  };



const API_URL = import.meta.env.VITE_SUPABASE_URL;

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  setStatus("⏳ Sending...");

  try {
    const { error } = await supabase.from("contacts").insert([
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
    ]);

    if (error) throw error;

    setStatus("✅ Message sent successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  } catch (error) {
    console.error(error);
    setStatus("❌ Failed to send message.");
  }
};


  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-black via-gray-950 to-gray-900 text-gray-200 py-20 px-6 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,150,255,0.1),transparent_70%)]"></div>

      <div className="relative z-10 container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-extrabold text-white">
            Get in Touch With Us
          </h2>
          <p className="text-gray-400 max-w-md">
            Reach out to our expert team for networking, IT infrastructure, or cloud integration services.  
            We’re here to help you stay connected and secure.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl">
                <Phone className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Phone</h4>
                <p className="text-gray-400">+91 6398275011</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl">
                <Mail className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Email</h4>
                <p className="text-gray-400">info@securepi.in</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl">
                <MapPin className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Office</h4>
                <p className="text-gray-400">
                  SecurePi <br />
                  Sector 62, Noida, Uttar Pradesh, India
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl">
                <Clock className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Working Hours</h4>
                <p className="text-gray-400">24/7 Support Service</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form + Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-gray-900/70 backdrop-blur-md rounded-3xl border border-gray-800 p-8 shadow-2xl overflow-hidden"
        >
          {/* Background Image Overlay */}
          <div
            className="absolute inset-0 opacity-20 bg-cover bg-center rounded-3xl"
            // style={{ backgroundImage: `url(${Img6})` }}
          ></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all rounded-xl py-3 font-semibold text-white shadow-lg"
              >
                Send Message
              </button>

              {status && (
                <p
                  className={`text-center mt-3 ${
                    status.includes("successfully")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacts;
