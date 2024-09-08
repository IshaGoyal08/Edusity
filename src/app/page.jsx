'use client'

import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contactus from './Components/Contact us/Contactus'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const page = () => {
  const [playVideo,setplayVideo] = useState(false)
  
  return (
    <div>
<Navbar/>
      <Hero/>
     
      <Programs/>
      <About setplayVideo={setplayVideo}/>
      <Campus/>
      <Testimonials/>
      <Contactus/>
      <Footer/>
      <VideoPlayer playVideo={playVideo} setplayVideo={setplayVideo}/>

    </div>
  )
}

export default page