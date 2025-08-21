import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import AboutSection from '../components/Home/AboutSection'
import ServiceSection from '../components/Home/ServiceSection'
import TestimonialsSection from '../components/Home/TestimonialsSection'
import GallerySlider from '../components/Home/GallerySlider'
import PrecisionRepairs from '../components/Home/PrecisionRepairs'
import FindUs from '../components/Home/Findus'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection/>
      <ServiceSection />
      <TestimonialsSection />
      <GallerySlider />
      <PrecisionRepairs/>
      <FindUs />
    </div>
  )
}

export default Home
