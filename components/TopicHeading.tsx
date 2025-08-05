import { anton } from '@/utils/fonts'
import React from 'react'

export default function TopicHeading({text,pad=false}:{text:string,pad?:boolean}) {
  return (
    <div className={`max-w-7xl mx-auto py-10 lg:py-20 pb-10 ${pad && "lg:pb-2" }`}>
        <h2 className={`${anton.className} text-3xl lg:text-7xl text-black dark:text-white max-w-4xl uppercase`}>
            {text}
        </h2>
    </div>
  )
}
