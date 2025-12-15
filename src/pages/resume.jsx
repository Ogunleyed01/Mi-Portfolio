import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'

const Resume = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/CV-E-Dave-Frontend.pdf'
    link.download = 'CV-E-Dave-Frontend.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className='min-h-screen bg-stone-50'>
      {/* Header */}
      <div className='flex justify-between items-center p-6 md:p-8 lg:p-10 text-slate-800 relative z-[70]'>
        <Link to="/">
          <div className={`text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-800 ${isMobile && isMenuOpen ? 'hidden' : ''}`}>E-Dave</div>
        </Link>
        {/* Hamburger Menu - Mobile */}
        {isMobile && (
          <i 
            className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu-alt-right'} text-3xl cursor-pointer transition-all duration-300 relative z-[70] ${isMenuOpen ? 'text-indigo-800' : 'text-slate-700'}`}
            onClick={isMenuOpen ? () => setIsMenuOpen(false) : () => setIsMenuOpen(true)}
          ></i>
        )}
        {/* Hamburger Menu - Tablet/Desktop */}
        {!isMobile && (
          <i 
            className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu-alt-right'} text-3xl md:text-4xl lg:text-5xl cursor-pointer transition-all duration-300 relative z-[70] text-slate-700`}
            onClick={isMenuOpen ? () => setIsMenuOpen(false) : () => setIsMenuOpen(true)}
          ></i>
        )}
      </div>

      {/* Menu Component */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} showHeader={false} />

      {/* Main Content */}
      <div className='px-6 md:px-12 lg:px-16 py-12 md:py-20'>
        {/* Title and Download Button */}
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-slate-800 text-2xl md:text-2xl lg:text-2xl font-bold'>
            /resume.
          </h1>
          <button
            onClick={handleDownload}
            className='flex items-center gap-2 px-4 py-2 border border-indigo-800 text-indigo-800 hover:bg-indigo-800 hover:text-white transition-all duration-300'
          >
            <i className='bx bx-download text-xl'></i>
            <span>Download</span>
          </button>
        </div>

        {/* PDF Viewer */}
        <div className='bg-white rounded-lg shadow-md overflow-hidden w-full'>
          <embed
            src="/CV-E-Dave-Frontend.pdf#toolbar=0&navpanes=0&scrollbar=1"
            type="application/pdf"
            className='w-full h-[calc(100vh-300px)] md:h-[calc(100vh-250px)] min-h-[600px]'
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Resume

