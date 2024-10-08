import React from 'react'

interface Props {
    title: string,
    subtitle: string,
    userName?: string  
}

const Header = ({title, subtitle, userName}: Props) => {
  return (
    <header>
        <h1 className='text-3xl font-semibold text-gray-900'>
            {title} 
            {userName && <span className='text-blue-700'> {userName}</span>}
        </h1>
        <p className='mt-2 text-gray-300'>{subtitle}</p>

    </header>    
  )
}

export default Header