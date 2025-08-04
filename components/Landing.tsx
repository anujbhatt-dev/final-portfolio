"use client"
import React from 'react'
import Hero from './Hero'
import MagicBento from './ui/MagicBento/MagicBento'
import Experience  from './Experience'


export default function Landing() {
  return (
    <div className="text-7xl   tracking-wide ">
        <div className='min-h-[93vh] overflow-hidden uppercase p-2'>
            <Hero/>
        </div>
        <div>
            <Experience />
        </div>
    </div>
  )
}
