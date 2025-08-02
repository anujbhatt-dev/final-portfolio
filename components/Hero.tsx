"use client"
import React from 'react'
import TextPressure from './ui/TextPressure/TextPressure'
import { inter } from '@/utils/fonts'
import ShinyText from './ui/ShinyText/ShinyText'


export default function Hero() {
  return (
    <div className={`${inter.className} h-[90vh] flex justify-center items-center max-w-7xl mx-auto text-center  `}>
        <div >
            <div style={{position: 'relative'}}>
            <TextPressure
                text="Hello!_I_am_Allen_sir"
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
            <div className='mt-4 text-justify'>
                A fullstack Web Developer
            </div>
            <div className='text-sm leading-snug text-justify mx-auto mt-8'>
            <ShinyText text="Hi, I'm Leo — a full stack developer with a focus on real-time web applications. I build fast, scalable, and interactive user experiences using technologies like Next.js, Prisma, PostgreSQL, and WebSockets. Whether it's a collaborative platform, a modern dashboard, or a streaming app, I love bringing ideas to life through clean code and intuitive design." disabled={false} speed={6} className='custom-class' />
            
            </div>
        </div>
    </div>
  )
}
