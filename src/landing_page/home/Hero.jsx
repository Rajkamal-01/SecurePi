import React from 'react'
import HeroImg from '../../assets/HeroImg.webp'
import { useNavigate } from "react-router-dom";
  

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className='py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden'>
      <div className='container min-h-[500px] flex relative'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10'>
          {/* hero text section */}
          <div className='space-y-5 lg:pr-7'>
            <h1 className='text-4xl font-semibold'>WE PROVIDE SECURE <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>NETWORKING SOLUTIONS ACROSS INDIA </span></h1>
            <p>Whether it’s a school campus, a university lab, or a corporate floor, we provide high-performance, secure, and reliable networking solutions.</p>
            <div>
              <button className='primary-btn'  onClick={() => navigate("/contact")}>Let's Connect</button>
            </div>
          </div>
          {/* image sectin */}
          <div className='order-1 sm:order-2'>
            <img src={HeroImg} className=''/>
          </div>
        </div>
        {/* Animated blob */}
        <div className='h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper'>

        </div>
      </div>
    </div>
      )
}

export default Hero