import React from 'react'
import Img7 from "../../assets/Img7.webp"

const AboutUs = () => {
  return (
  
    <div className='py-12 sm:py-0 duration-300 overflow-hidden mt-5 mb-5'>

     {/* Optional subtle gradient overlay */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-white">
          About Us
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-4">
          Specialized in designing, deploying, and maintaining robust network systems built for speed, security, and stability.
        </p>
        </div>
        
      <div className='container min-h-[400px] flex relative mt-3'>
        <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-4 sm:gap-8 relative z-10'>

          {/* Image Section */}
          <div className="flex justify-center">
            <img 
              src={Img7} 
              alt="About Us" 
              className="w-[90%] sm:w-[80%] lg:w-[85%] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className='space-y-4 text-gray-400'>
            <h1 className='text-2xl font-semibold '>Introduction</h1>
            <p className='leading-relaxed '>
              SecurePi is a professional networking service company dedicated to delivering reliable, secure, and high-performance network solutions for modern organizations. We specialize in the design, deployment, and management of advanced computer networks that enable seamless connectivity and operational efficiency.
            </p>
            <p>With a team of certified networking professionals, we provide end-to-end services including network infrastructure setup, structured cabling, server configuration, wireless networking, and comprehensive network security solutions. Our expertise ensures that every project we undertake meets the highest standards of quality, scalability, and performance.</p>
            <p>Our mission is to empower businesses, educational institutions, and enterprises with technology-driven networking solutions that enhance productivity, reduce downtime, and support long-term growth.</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
