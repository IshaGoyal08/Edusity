import Image from 'next/image'
import './hero.css'
import React from 'react'

const Hero = () => {
  return (
    <div id='home' className='hero py-3 px-[10%] flex items-center justify-center w-full min-h-[100vh] bg-cover bg-center text-white' >
      <div className='text-center max-w-[800px]'>
        <h1 className='text-6xl font-bold max-[850px]:text-4xl max-[650px]:text-3xl max-[650px]:m-auto'>We Ensure better education for a better world</h1>
        <p className='max-w-[600px] text-lg  mx-auto my-5 max-[650px]:text-[14px] max-[650px]:mt-[15px] max-[650px]:mb-[30px] max-[650px]:mx-auto  '>Our cutting-edge curriculum is designed to empower students with the knowledge,skills,and experiences needed to excel in the dynamic field of education</p>
        <button  className='bg-white inline-flex items-center justify-center gap-2 text-[#27272afa] px-4 py-2 text-md outline-none border-none rounded-3xl'>Explore more <Image width={24} height={16}  src="/images/dark-arrow.png" alt=""/></button>
      </div>

    </div>
  )
}

export default Hero