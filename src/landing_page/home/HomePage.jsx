import React from 'react'
import Hero from './Hero'
import AboutUs from './AboutUs'
import Service from './Service'

import Left from './Left'
import Contacts from './Contacts'


const HomePage = () => {
  return (
    <>
    <div className="pt-10">
    <Hero />
    <AboutUs />
    <Service />
    <Left />
    <Contacts />
    </div>
    </>
  )
}

export default HomePage