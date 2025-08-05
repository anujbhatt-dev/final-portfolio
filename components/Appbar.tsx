"use client"
import React, { useEffect, useState } from 'react'
import { anton } from '@/utils/fonts'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import MyPic from "@/public/my-pic.jpg"
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
    <div style={{zIndex:1000}} className={`${anton.className} px-6 py-6 pl-2 text-xl uppercase  flex items-center  rounded-full sticky top-2 lg:top-8 mx-auto ${isAtTop?"max-w-xl":"max-w-7xl"} lg:mx-auto transition-all duration-500 mb-4 border border-zinc-900/10 justify-between backdrop-blur-lg h-[7vh] gap-x-4 mx-4 max-w-[1200px]`}>
        <div>
            <Image className='h-10 w-10 lg:h-12 lg:w-12 object-cover rounded-full hover:shadow-[0px_0px_5px_rgba(0,0,0,0.9)] transition-all duration-75' src={MyPic} alt=""/>
        </div>
        <div className={` hidden lg:flex ${!isAtTop && "flex-1"} justify-start items-center gap-x-4 transition-all duration-500`}>        
        {
            items.map((item,i)=>{
                return <Link onClick={()=>setActiveIndex(i)} className={`${i==activeIndec && "bg-neutral-600/50"} py-2 px-4 rounded-sm transition-all duration-75 hover:-translate-y-[1px] hover:text-shadow-xs text-shadow-white`} key={item.label} href={item.href}>
                        {item.label}
                </Link>
            })
        }
        </div>
        <div className='gap-x-4 flex items-center justify-center'>
          {!isAtTop && <SocialMedia />}
          <a className='text-green-500 hover:text-white transition-all duration-75 hover:scale-125' href='/resume-sample.pdf' target='_blank'>
            <Tooltip title="Download CV" arrow>
              <DownloadIcon/>              
            </Tooltip>
          </a>
        </div>        
    </div>
  )
}
