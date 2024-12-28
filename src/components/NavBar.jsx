// components/Navbar.jsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Download, Github, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='bg-white shadow-sm p-4 relative'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <div></div>
        
        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-4'>
          <Link 
            to="/download" 
            className='inline-flex items-center gap-2 bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200'
          >
            <Download className="h-4 w-4" />
            Chrome Extension
          </Link>
          
          <a 
            href="https://github.com/abhishekmaher6699" 
            target="_blank" 
            rel="noopener noreferrer" 
            className='inline-flex items-center gap-2 text-gray-700 hover:text-red-700 transition-colors duration-200'
          >
            <Github className="h-5 w-5" />
            GitHub
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className='md:hidden text-gray-700'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='absolute top-full right-0 left-0 bg-white shadow-lg md:hidden z-50'>
            <div className='flex flex-col p-4 space-y-4'>
              <Link 
                to="/download" 
                className='inline-flex items-center gap-2 bg-red-700 text-white px-4 py-2  hover:bg-red-700 transition-colors duration-200'
                onClick={() => setIsMenuOpen(false)}
              >
                <Download className="h-4 w-4" />
                Chrome Extension
              </Link>
              
              <a 
                href="https://github.com/abhishekmaher6699" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='inline-flex items-center gap-2 text-gray-700 hover:text-red-700 px-4 transition-colors duration-200'
                onClick={() => setIsMenuOpen(false)}
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar