import React, { useEffect, useState } from 'react'
import './navbar.css'
import Image from 'next/image'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [dark,setDark]=useState(false)
  useEffect(() => {
    window.addEventListener("scroll",()=>{
      window.scrollY>200 ? setDark(true): setDark(false)
    })
   
  }, [])
  const [mobilemenu,setmobilemenu]=useState(false)
  const togglemenu=()=>{
    mobilemenu? setmobilemenu(false):setmobilemenu(true)

  }

  
  return (
 <nav className={`max-xl:px-[5%]   py-3 px-[10%]  w-[100%] fixed top-0 left-0 z-10 flex items-center justify-between ${dark?'bg-[#0c0647fa] transition duration-700 ':''} `}>
    <Image src={'/images/logo.png'} alt='' height={180} width={180} className='mx-2' ></Image>
    <ul className={`max-xl:gap-8 text-white flex items-center gap-10 mx-2 text-lg ${mobilemenu?'':'right-[-210px]'}  `}>
        <li className='cursor-pointer'><Link to='home' duration={500} offset={0} smooth={true} onClick={()=>setmobilemenu(false)}>Home</Link></li>
        <li className='cursor-pointer'><Link to='programs' duration={500} offset={-70} smooth={true} onClick={()=>setmobilemenu(false)} >Program</Link></li>
        <li className='cursor-pointer'><Link to='about' duration={500} offset={-120} smooth={true} onClick={()=>setmobilemenu(false)}>About us</Link></li>
        <li className='cursor-pointer'><Link to='campus' duration={500} offset={-70} smooth={true} onClick={()=>setmobilemenu(false)}>Campus</Link></li>
        <li className='cursor-pointer'><Link to='testimonials' duration={500} offset={-70} smooth={true} onClick={()=>setmobilemenu(false)}>Testimonials</Link></li>
        <li className='cursor-pointer'><Link to='contact' duration={500} offset={-70} smooth={true} onClick={()=>setmobilemenu(false)}  className='bg-white text-[#27272afa] px-3 py-2 text-lg outline-none border-none rounded-3xl'>Contact us</Link></li>
    </ul>
    <img src="/images/menu-icon.png" alt="" className=' hidden max-[950px]:block w-[25px]  my-3' onClick={togglemenu} />
 </nav> 
  )
}

export default Navbar