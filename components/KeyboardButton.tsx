import { Icon, IconBrandLinkedin, IconProps } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

export default function KeyboardButton({
  Icon,
  href,
}: {
  Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
  href: string;
}) {
  return (
    <Link
      href={href}
      target='_blank'
      className='group bg-zinc-900 inline-block p-4 rounded-2xl 
        shadow-[7px_7px_0px_rgba(63,63,70,1)] 
        lg:rotate-x-[15deg] lg:rotate-z-[5deg] 
        hover:lg:rotate-x-[8deg] hover:lg:rotate-z-[3deg] 
        hover:shadow-[4px_4px_0px_rgba(0,255,0,1),8px_8px_5px_rgba(0,255,0,0.4)] 
        hover:translate-y-[2px] hover:scale-[0.97]
        transition-all duration-300 ease-in-out cursor-pointer
        hover:text-white hover:bg-zinc-700'
    >
      <Icon className='h-10 w-10 text-zinc-400 group-hover:text-green-400 transition-all duration-300 ease-in-out' />
    </Link>
  );
}
