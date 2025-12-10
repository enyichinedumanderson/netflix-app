'use client'

import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-20">
      <div className="max-w-[1000px] mx-auto flex items-center justify-between px-4 py-5">
        
        {/* LOGO */}
        <Image 
          src="/logo.png" 
          alt="Netflix Logo" 
          width={148} 
          height={40} 
          className="w-[155px] h-auto"
          priority
        />

        {/* SIGN IN */}
        <Link href="/signIn" className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-4 py-1.5 rounded">
          Sign In
        </Link>

      </div>
    </header>
  )
}
