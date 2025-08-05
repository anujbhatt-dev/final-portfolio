import React from 'react'

export default function SmallHeading({text,cn}:{text:string;cn:string}) {
  return (
    <div className={`text-sm ${cn}`}>
          {text}
    </div>
  )
}
