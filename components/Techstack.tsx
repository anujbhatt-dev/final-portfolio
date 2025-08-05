import React from 'react'
import TopicHeading from './TopicHeading'
import Node from "@/public/nodejs.svg"
import Mongo from "@/public/mongo.svg"
import Postgres from "@/public/postgress.png"
import ReactLogo from "@/public/React.webp"
import Image from 'next/image'
import { geistMono } from '@/utils/fonts'
import SmallHeading from './ui/SmallHeading'

export default function Techstack() {
    const items = [
        {
          text:"Nodejs",
          image:Node  
        },
        {
            text:"MongoDB",
            image:Mongo  
        },
        {
            text:"Postgres",
            image:Postgres  
        },
        {
            text:"React",
            image:ReactLogo  
        },
        {
            text:"Nodejs",
            image:Node  
        },
        {
            text:"MongoDB",
            image:Mongo  
        },
        {
            text:"Postgres",
            image:Postgres  
        },
        {
            text:"React",
            image:ReactLogo  
        },
        {
            text:"Nodejs",
            image:Node  
        },
    ]
    
    
  return (
    <div className={`${geistMono.className} pb-10`}>
       <TopicHeading pad={true} text="Techstack"/> 
       <SmallHeading text="I USE" cn="text-green-500"/>
      <div className='relative grid grid-cols-3 lg:grid-cols-9 gap-8 gap-x-8 py-4 lg:py-8'>
            {
                items.map((item,i) => 
                    <div key={item.text+i} className='flex flex-col justify-center items-center p-4 rounded-lg bg-neutral-900'>                        
                        <Image title={item.text} src={item.image} className='h-8 w-8 grayscale-100 hover:grayscale-0 cursor-pointer' alt="" />
                        <p className='text-sm text-neutral-500 mt-4 text-center'>{item.text}</p>
                    </div>
                )
            }                        
      </div>
      <SmallHeading text="... many more" cn="text-neutral-500 text-center"/>
    </div>
  )
}
