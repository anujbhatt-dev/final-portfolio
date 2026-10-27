"use client"
import React from 'react'
import { geistMono, inter, poppins } from '@/utils/fonts'
import KeyboardButton from './KeyboardButton'
import { IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconMail } from '@tabler/icons-react'


export default function Hero() {
  return (
    <div className={`${geistMono.className} lg:h-[70vh] flex justify-center items-center max-w-7xl mx-auto text-center`}>
        {/* large screen */}
        <div className='hidden lg:block '>
            <div className='text-2xl text-left '>
                Hello! I am <span className='text-orange-500'>Anuj Bhatt</span>
            </div>
            <div className='mt-4 text-left text-7xl'>
                A fullstack Web Developer
            </div>
            <div className='text-sm leading-snug text-justify  mt-8 max-w-xl'>
            Mainly working in the JavaScript ecosystem, I’m a dedicated problem-solver who thrives on learning and building.
            </div>
            <div className='flex mt-16 perspective-distant gap-x-2'>
              <KeyboardButton Icon={IconBrandLinkedin} href={process.env.NEXT_PUBLIC_LINKEDIN || ''}/>
              <KeyboardButton Icon={IconMail} href={process.env.NEXT_PUBLIC_EMAIL || ''}/>
              <KeyboardButton Icon={IconBrandInstagram} href={process.env.NEXT_PUBLIC_INSTAGRAM || ''}/>
              <KeyboardButton Icon={IconBrandX} href={process.env.NEXT_PUBLIC_X || ''}/>
            </div>
        </div>

        {/* Small screen */}
        <div className='mt-24 lg:hidden'>
            <div className={`text-5xl font-bold`} style={{position: 'relative'}}>
                Hello! I am <br /> 
                ANuj Bhatt
            </div>
            <div className=' mt-4 text-center text-sm'>
                A fullstack Web Developer
            </div>
            <div className='text-sm leading-snug text-justify mx-auto mt-4 max-w-xl'>
            Hi, I&apos;m Leo — a full stack developer with a focus on real-time web applications. I build fast, scalable, and interactive user experiences using technologies like Next.js, Prisma, PostgreSQL, and WebSockets. Whether it&apos;s a collaborative platform, a modern dashboard, or a streaming app, I love bringing ideas to life through clean code and intuitive design.
            </div>
            <div className='flex mt-16 perspective-distant gap-x-2 justify-center'>
              <KeyboardButton Icon={IconBrandLinkedin} href=""/>
              <KeyboardButton Icon={IconMail} href=""/>
              <KeyboardButton Icon={IconBrandInstagram} href=""/>
              <KeyboardButton Icon={IconBrandX} href=""/>
            </div>
        </div>
    </div>
  )
}
