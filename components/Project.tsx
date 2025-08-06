import { geistMono } from '@/utils/fonts';
import { IconExternalLink, IconEye, IconLink } from '@tabler/icons-react';
import { div, li } from 'framer-motion/client';
import { ul } from 'framer-motion/m';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react'

export default function Project({
    title,
    description,
    fromDate,
    toDate,
    images,
    features,
    id,
    techstack,
    links
}:{
    title:string;
    description:string;
    fromDate?:string;
    toDate?:string;
    images?:(StaticImageData | string)[];
    features?:string[];
    id?:number;
    techstack?:string[];
    links:{
        code:string;
        site:string;        
    }
}) {
  const [imgNumber,setImgNumber] = useState<number>(0)

  return (
    <div className={`max-w-7xl mx-auto leading-[28px] pb-8 ${id!=3 && "border-b border-neutral-800 mb-8"}  `}>
        <h2 className='text-xl uppercase font-bold mb-6'>
            {id}{id && "."} {title}
        </h2>
        {techstack && 
        <h3 className='text-neutral-700 uppercase font-bold'>
            Key techstack
        </h3>
        }
        {
            techstack &&             
            <ul className='text-neutral-400 flex gap-4 mb-6 mt-2 flex-wrap'>
                {techstack.map((item,i)=>(
                    <li key={item+i} className=' group bg-zinc-900 inline-block p-4 rounded-2xl 
                        shadow-[7px_7px_0px_rgba(63,63,70,1)] 
                        lg:rotate-x-[15deg] lg:rotate-z-[5deg] 
                        hover:lg:rotate-x-[8deg] hover:lg:rotate-z-[3deg] 
                        hover:shadow-[4px_4px_0px_rgba(0,255,0,1),8px_8px_5px_rgba(0,255,0,0.4)] 
                        hover:translate-y-[2px] hover:scale-[0.97]
                        transition-all duration-300 ease-in-out cursor-pointer
                        hover:text-white hover:bg-zinc-700
                        '>
                        {item}
                    </li>
                ))}
            </ul>
        }
        <h3 className='text-neutral-700 uppercase font-bold'>
            Overview
        </h3>
        <p className='text-neutral-400 mb-6 max-w-5xl'>
            {description}
        </p>
        {/* {fromDate} - {toDate}
        {JSON.stringify(images)}         */}
        {features && 
        <h3 className='text-neutral-700 uppercase font-bold'>
            Key Features
        </h3>
        }
        {
            features &&             
            <ul className='pl-6 list-disc text-neutral-400 max-w-5xl'>
                {features.map((feature,i)=>(
                    <li key={feature+i} className=' mb-2'>
                        {feature}
                    </li>
                ))}
            </ul>
        }    
        {
            images && <Image className='h-[40vh] lg:h-[30rem] w-auto rounded-lg object-contain my-8' src={images[imgNumber]} alt=""/>
        }
        <div className='flex gap-x-2 justify-start items-center flex-wrap'>
        {
            images && images.map((img,i)=><Image key={title+i} onClick={()=>setImgNumber(i)} className={`${i==imgNumber ? "outline-2 outline-green-500 outline-offset-4" : "outline-2 outline-transparent outline-offset-0"} h-[5rem] w-auto rounded-lg mt-4 transition-all duration-150 cursor-pointer object-cover`} src={img} alt=""/>)
        }
        </div>


        <div className={`${geistMono.className} flex justify-end mt-8 px-2 uppercase text-green-500 gap-x-8 text-sm`}>
            <a target='_blank' rel='noreferrer nofollow' href={links.code} className='flex gap-x-2 justify-between items-center'><span className='font-semibold'>See Code</span> <IconEye className=''/></a>
            <a target='_blank' rel='noreferrer nofollow' href={links.site} className='flex gap-x-2 justify-between items-center'><span className='font-semibold'>Live Site</span> <IconExternalLink className=''/></a>
        </div>


    </div>
  )
}
