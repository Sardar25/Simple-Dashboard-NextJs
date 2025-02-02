import { ModeToggle } from '@/components/ThemeToggler'
import React from 'react'

const layout = ( { children } : { children : React.ReactNode } ) => {
  return (
    <div className='h-[100vh] flex items-center justify-center relative'>
        { children }

<div className='fixed right-0 bottom-0 py-8 px-4'>
        <ModeToggle/>
        </div>
    </div>
  )
}

export default layout