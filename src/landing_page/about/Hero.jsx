import React from 'react'
import AboutI from "../../assets/AboutI.webp"


const Hero = () => {
  return (
  
    <div className='py-12 sm:py-0 duration-300 overflow-hidden mt-5 mb-5'>

     {/* Optional subtle gradient overlay */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
          About Us
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Specialized in designing, deploying, and maintaining robust network systems built for speed, security, and stability.
        </p>
        </div>
        
      <div className='container min-h-[400px] flex relative mt-3'>
        <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-4 sm:gap-8 relative z-10'>

          {/* Image Section */}
          <div className="flex justify-center">
            <img 
              src={AboutI} 
              alt="About Us" 
              className="w-[90%] sm:w-[80%] lg:w-[75%] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className='space-y-4 text-gray-400'>
            <h1 className='text-2xl font-semibold '>Introduction</h1>
            <p className='leading-relaxed '>
              At our core, we help businesses stay connected, secure, and productive. We design and manage intelligent network solutions that support today’s digital operations and tomorrow’s growth.
            </p>
            <p>From initial planning to deployment and long-term support, our team ensures every network is optimized for performance, security, and scalability. We believe in building long-term partnerships by delivering dependable service, transparent communication, and measurable results.</p>
            <p>Our expertise ensures that every project we undertake meets the highest standards of quality, scalability, and performance.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
