"use client"
import React from 'react'
import TextPressure from './ui/TextPressure/TextPressure'
import { geistMono, inter, poppins } from '@/utils/fonts'
import ShinyText from './ui/ShinyText/ShinyText'
import KeyboardButton from './KeyboardButton'
import { IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconMail } from '@tabler/icons-react'


export default function Hero() {
  return (
    <div className={`${geistMono.className} lg:h-[70vh] flex justify-center items-center max-w-7xl mx-auto text-center`}>
        {/* large screen */}
        <div className='hidden lg:block '>
            <div className='text-7xl' style={{position: 'relative'}}>
            <TextPressure
                text="Hello! I am John Doe"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={12}
                />
            </div>
            <div className='mt-8 text-left text-7xl'>
                A fullstack Web Developer
            </div>
            <div className='text-sm leading-snug text-justify  mt-8 max-w-xl'>
            <ShinyText text="Mainly working in the JavaScript ecosystem, I’m a dedicated problem-solver who thrives on learning and building." disabled={false} speed={6} className='custom-class' />            
            </div>
            <div className='flex mt-16 perspective-distant gap-x-2'>
              <KeyboardButton Icon={IconBrandLinkedin} href=""/>
              <KeyboardButton Icon={IconMail} href=""/>
              <KeyboardButton Icon={IconBrandInstagram} href=""/>
              <KeyboardButton Icon={IconBrandX} href=""/>
            </div>
        </div>

        {/* Small screen */}
        <div className='mt-24 lg:hidden'>
            <div className={`text-5xl font-bold`} style={{position: 'relative'}}>
                Hello! I am <br /> 
                John Doe
            </div>
            <div className=' mt-4 text-center text-sm'>
                A fullstack Web Developer
            </div>
            <div className='text-sm leading-snug text-justify mx-auto mt-4 max-w-xl'>
            <ShinyText text="Hi, I'm Leo — a full stack developer with a focus on real-time web applications. I build fast, scalable, and interactive user experiences using technologies like Next.js, Prisma, PostgreSQL, and WebSockets. Whether it's a collaborative platform, a modern dashboard, or a streaming app, I love bringing ideas to life through clean code and intuitive design." disabled={false} speed={6} className='custom-class ' />            
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
