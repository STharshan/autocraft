import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import AboutSection from '../components/Home/AboutSection'
import ServiceSection from '../components/Home/ServiceSection'
import TestimonialsSection from '../components/Home/TestimonialsSection'
import GallerySlider from '../components/Home/GallerySlider'
import PrecisionRepairs from '../components/Home/PrecisionRepairs'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection/>
      <ServiceSection />
      <TestimonialsSection />
      <GallerySlider />
      <PrecisionRepairs/>
    </div>
  )
}

export default Home
