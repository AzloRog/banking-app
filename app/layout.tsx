import React from 'react'
import { Metadata } from 'next'
import "./globals.css"

export const metadata: Metadata = {
    title: "Banking App",
    description: "This app developed by Daniel for portfolio"
}
const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
        <html lang="ru">
            <body>
                {children}
            </body>
        </html>
  )
}

export default RootLayout