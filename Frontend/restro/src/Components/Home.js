import React from 'react'
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Reviewt from './Reviewt';
import Menu from './Menu';
function Home() {
  return (
    <div>
      <HeroSection/>
      <AboutUs/>
      <Menu/>
      <Reviewt/>
      <ContactUs/>
    </div>
  )
}

export default Home