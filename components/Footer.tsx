"use client"
import React from 'react'
import SocialMedia from './SocialMedia'
import { IconCopyright } from '@tabler/icons-react'

export default function Footer() {
  return (
    <div className=' flex justify-center items-center min-h-[50vh] overflow-hidden w-screen relative border-t border-neutral-800'>
            <div className='z-50 flex justify-between items-center gap-x-2 flex-1 max-w-5xl mx-4 text-neutral-500'>
                <p className='flex justify-center items-center gap-x-2'><IconCopyright/> Anuj Bhatt 2025</p>
                <SocialMedia/>
            </div>
    </div>
  )
}
