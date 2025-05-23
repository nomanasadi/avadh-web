import React from 'react'
import Navbar from '../components/Navbar'
import HeroSlider from '../components/Slide'
import VideoBanner from '../components/Video'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import Infrastructure from '../components/Infrastructure'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSlider/>
      <VideoBanner/>
      <AboutUs/>
      <Infrastructure/>
      <Footer/>
    </div>
  )
}

export default Home
