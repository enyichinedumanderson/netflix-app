import './globals.css'
import { ReactNode } from 'react'


export const metadata = {
title: 'Netflix — Watch TV shows online, watch movies online',
description: 'Unlimited movies, TV shows, and more.'
}


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="en">
    <body>
      {children}
    </body>
</html>
)
}