"use client"

import React, { ReactNode } from 'react'
import Appbar from './Appbar'
import SideSocialIcons from './SideSocialMedia'
import Footer from './Footer'
import { usePathname } from 'next/navigation'

export default function Provider({children}:{children:ReactNode}) {
  const pathname = usePathname()
  return (
    <div className='min-h-[200vh] relative'>
      <div style={{zIndex:1001}} className='z-10 text-white/60 fixed bottom-0 lg:left-16 left-2'>
        <SideSocialIcons/>
      </div>
        <Appbar/>
        {children}
        <Footer/>
    </div>
  )
}
