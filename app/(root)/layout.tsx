import Sidebar from '@/components/Sidebar'
import React from 'react'

const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='flex'>
        <Sidebar />
        {children}
    </main>
  )
}

export default RootLayout