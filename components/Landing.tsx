"use client"
import React from 'react'
import Hero from './Hero'
import Experience  from './Experience'
import RecentWork from './RecentWork'
import Techstack from './Techstack'


export default function Landing() {
  return (
    <div className="text-7xl  tracking-wide ">
        <div className='min-h-[93vh] overflow-hidden uppercase p-2 border-b border-neutral-800'>
            <Hero/>
        </div>
          <div className='px-4 lg:px-8  max-w-7xl mx-auto border-x border-neutral-800 '>
            <div className='border-b border-neutral-800'>
                <Techstack/>
            </div>
            <div className='border-b border-neutral-800'>
                <Experience />
            </div>
            {/* <hr className='border-neutral-800'/> */}
            <div className=''>
              <RecentWork />
            </div>
            <div className=''>
              
            </div>        
        </div>
    </div>
  )
}
