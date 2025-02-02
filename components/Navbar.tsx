import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoImage from '../images/Money.png'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
import { ModeToggle } from '@/components/ThemeToggler'
function Navbar() {
  return (
    <div className='bg-primary dark:bg-slate-700 py-2 px-8 text-white flex justify-between items-center'>
        <Link href={'/'}>

        <Image alt='logo' 
        width={25}   src={LogoImage}/>
        </Link>
        
        <div className=' flex items-center gap-1'>
        <ModeToggle/>


        <DropdownMenu>
  <DropdownMenuTrigger className='focus:outline-none'>
  <Avatar>
            <AvatarImage 
            src='https://github.com/shadcn.png'
            alt='@schadcn'
            />
            <AvatarFallback className='text-black'>BT</AvatarFallback>
        </Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent align='end'>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
        <Link href={'/profile'}>Profile</Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
        <Link href={'/auth'}>Logout</Link>
    </DropdownMenuItem>
   
  </DropdownMenuContent>
</DropdownMenu>

</div>

    </div>
  )
}

export default Navbar