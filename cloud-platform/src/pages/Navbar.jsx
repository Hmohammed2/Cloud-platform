import React, { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // you can tweak the 10 to whatever pixel-offset you like
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`
        w-full left-0
        ${isScrolled
          ? 'sticky top-0 bg-gray-100 bg-opacity-60 backdrop-blur-sm shadow-md'
          : 'absolute top-0 bg-transparent'}
        z-50
        transition-colors duration-300
      `}
    >
      <div className="container mx-auto lg:px-20 px-6 py-4 flex justify-between items-center">
        <a href="/" className="lg:px-6 w-64 h-auto">
          <img src="logo.webp" alt="CloudTech logo" className="w-full h-full" />
        </a>
        <div className="hidden md:flex space-x-6">
          <a href="#features" className={`${isScrolled ? `text-black hover:text-blue-500` : `text-white hover:text-blue-500`} font-semibold`}>Features</a>
          <a href="#pricing" className={`${isScrolled ? `text-black hover:text-blue-500` : `text-white hover:text-blue-500`} font-semibold`}>Pricing</a>
          <a href="#contact" className={`${isScrolled ? `text-black hover:text-blue-500` : `text-white hover:text-blue-500`} font-semibold`}>Contact</a>
        </div>
      </div>
    </nav>
  )
}
