"use client"
import React from 'react'
import Ballpit from './ui/Ballpit/Ballpit'
import SocialMedia from './SocialMedia'
import { IconCopyright } from '@tabler/icons-react'

export default function Footer() {
  return (
    <div className=' flex justify-center items-center min-h-[50vh] overflow-hidden w-screen relative border-t border-neutral-800'>
            <Ballpit
                count={10}
                gravity={0.2}
                friction={1}
                wallBounce={1}
                followCursor={true}
                colors={[255,34,33]}
                className='absolute top-0 bottom-0 left-0 right-0'
            />
            <div className='z-50 flex justify-between items-center gap-x-2 flex-1 max-w-5xl mx-4 text-neutral-500'>
                <p className='flex justify-center items-center gap-x-2'><IconCopyright/> Anuj Bhatt 2025</p>
                <SocialMedia/>
            </div>
    </div>
  )
}
