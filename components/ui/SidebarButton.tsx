"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { usePathname } from 'next/navigation'

interface Props {
    title: string,
    href: string,
    iconUrl: string
}
const SidebarButton = ({title, href, iconUrl}: Props) => {
    const currentPathname = usePathname();
    const isCurrentPathname = currentPathname == href;
  return (
    <Link 
        href={href} 
        className={
            `py-4 px-3 font-semibold flex items-center gap-3 rounded-md 
            ${isCurrentPathname && "bg-gradient-blue text-white"}`
        }
    >
        <div className='relative size-6'>
            <Image 
                src={iconUrl} 
                alt="icon" fill 
                className={'text-white  brightness-[3] ' + (!isCurrentPathname ? " invert" : "invert-0")}  />
        </div>
        <div className='hidden md:block'>
            {title}
        </div>
    </Link>
  )
}

export default SidebarButton