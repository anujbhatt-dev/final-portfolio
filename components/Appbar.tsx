"use client"
import React, { useEffect, useState } from 'react'
import { geistMono } from '@/utils/fonts'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import MyPic from "@/public/my-pic.png"
import { DownloadIcon } from 'lucide-react'
import { Tooltip } from '@mui/material'
import SocialMedia from './SocialMedia'



export default function Appbar() {
  const [isAtTop, setIsAtTop] = useState(true)
  const pathname = usePathname()
  const [activeIndec,setActiveIndex] = useState(0);

  const items = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)

    // Check on mount in case the user is already scrolled
    handleScroll()

    if(pathname.includes("about")){
        setActiveIndex(1)
    }else if(pathname.includes("contact")){
        setActiveIndex(2)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div style={{zIndex:1000}} className={`${geistMono.className} px-4 py-3 pl-2 text-sm uppercase flex items-center sticky top-2 lg:top-6 mx-auto ${isAtTop?"max-w-sm":"max-w-7xl"} lg:mx-auto transition-all duration-500 mb-2 justify-between gap-x-3 mx-4 max-w-[1200px] backdrop-blur-2xl rounded-full`}>
        <div>
            <Image className='shrink-0 h-9 w-9 lg:h-11 lg:w-11 object-cover rounded-full hover:shadow-[0px_0px_5px_rgba(0,0,0,0.9)] transition-all duration-75' src={MyPic} alt=""/>
        </div>
        <div className={`flex ${!isAtTop ? "flex-1" : ""} justify-start items-center gap-x-4 transition-all duration-500`}>        
        {
            items.map((item,i)=>{
                return <Link onClick={()=>setActiveIndex(i)} className={`${i==activeIndec ? "text-green-500" : ""} px-1 rounded-sm transition-all duration-75 hover:-translate-y-[1px] hover:text-green-400`} key={item.label} href={item.href}>
                        {item.label}
                </Link>
            })
        }
        </div>
        <div className='gap-x-3 flex items-center justify-center'>
          {!isAtTop && <SocialMedia />}
          <a className='text-green-500 hover:text-white transition-all duration-75 hover:scale-125' href='/anujbhatt-cv.pdf' target='_blank'>
            <Tooltip title="Download CV" arrow>
              <DownloadIcon/>              
            </Tooltip>
          </a>
        </div>        
    </div>
  )
}
