import React from 'react'
import Header from './components/Header'
import HeroSection from './components/heroSection'
import FurtherSection from './components/FurtherSection'
import Blog from './components/Blog'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
const page = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <FurtherSection/>
      <Blog/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default page

