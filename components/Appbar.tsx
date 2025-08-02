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
    <div style={{zIndex:1000}} className={`${anton.className} px-6 py-6 pl-2 text-xl uppercase  flex items-center bg-zinc-500/10 rounded-full sticky top-8 ${isAtTop?"max-w-xl":"max-w-7xl"} mx-auto transition-all duration-500 mb-4 border border-zinc-800 justify-between backdrop-blur-lg h-[7vh]`}>
        <div>
            <Image className='h-14 w-14 object-cover rounded-full hover:shadow-[0px_0px_5px_rgba(0,0,0,0.9)] transition-all duration-75' src={MyPic} alt=""/>
        </div>
        <div className={`  flex justify-center items-center gap-x-12`}>        
        {
            items.map((item,i)=>{
                return <Link onClick={()=>setActiveIndex(i)} className={`${i==activeIndec && "text-green-600"} transition-all duration-75 hover:-translate-y-[1px] hover:text-shadow-xs text-shadow-white`} key={item.label} href={item.href}>
                        {item.label}
                </Link>
            })
        }
        </div>
        <div className='gap-x-4 flex items-center justify-center'>
          {!isAtTop && <SocialMedia />}
          <div className='text-green-500 hover:text-white transition-all duration-75 hover:scale-125'>
            <Tooltip title="Download CV" arrow>
              <DownloadIcon/>              
            </Tooltip>
          </div>
        </div>        
    </div>
  )
}
