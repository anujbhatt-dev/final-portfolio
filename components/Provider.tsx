"use client"

import React, { ReactNode } from 'react'
import Appbar from './Appbar'
import Beams from './ui/Beams/Beams'
import SideSocialIcons from './SideSocialMedia'
import Footer from './Footer'

export default function Provider({children}:{children:ReactNode}) {

  return (
    <div className='min-h-[200vh] relative'>
      <div style={{zIndex:1001}} className='z-10 text-white/60 fixed bottom-0 lg:left-16 left-2'>
        <SideSocialIcons/>
      </div>
      <div className='top-0 h-screen w-full absolute -z-1'>
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={45}
        />
      </div>
        <Appbar/>
        {children}
        <Footer/>
    </div>
  )
}
