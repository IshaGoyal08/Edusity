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

const Page = () => {
  const [playVideo,setPlayVideo] = useState(false)
  
  return (
    <div>
<Navbar/>
      <Hero/>
     
      <Programs/>
      <About setplayVideo={setPlayVideo}/>
      <Campus/>
      <Testimonials/>
      <Contactus/>
      <Footer/>
      <VideoPlayer playVideo={playVideo} setplayVideo={setPlayVideo}/>

    </div>
  )
}

export default Page