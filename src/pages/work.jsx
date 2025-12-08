import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'

const Work = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const workProjects = [
    {
      id: 1,
      name: 'hellotax',
      logo: 'hellotax',
      url: 'app.hellotax.com',
      description: 'VAT compliance software platform'
    },
    {
      id: 2,
      name: 'Conectar',
      logo: 'CONECTAR',
      url: null,
      description: 'Connection platform'
    },
    {
      id: 3,
      name: 'John Deere',
      logo: 'JOHN DEERE',
      url: 'atu300.deere.com',
      description: 'Agricultural technology platform'
    },
    {
      id: 4,
      name: 'E-Dave Portfolio',
      logo: 'E-Dave',
      url: null,
      description: 'Personal portfolio website'
    },
    {
      id: 5,
      name: 'Pixel HTML',
      logo: 'PIXEL',
      url: null,
      description: 'Design and development agency'
    }
  ]

  return (
    <div className='min-h-screen bg-stone-50'>
      {/* Header */}
      <div className='flex justify-between items-center p-6 md:p-8 lg:p-10 text-slate-800 relative z-[70]'>
        <Link to="/">
          <div className='text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-800'>E-Dave</div>
        </Link>
        {/* Hamburger Menu - Visible on all screens */}
        <i 
          className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu-alt-right'} text-3xl md:text-4xl lg:text-5xl cursor-pointer transition-all duration-300 relative z-[70] ${isMenuOpen ? 'text-indigo-800' : 'text-slate-700'}`}
          onClick={isMenuOpen ? () => setIsMenuOpen(false) : () => setIsMenuOpen(true)}
        ></i>
      </div>

      {/* Menu Component */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} showHeader={false} />

      {/* Main Content */}
      <div className='px-6 md:px-12 lg:px-16 py-12 md:py-20'>
        {/* Title Section */}
        <div className='text-center mb-12 md:mb-16'>
          <h1 className='text-slate-800 text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4'>
            /work.
          </h1>
          <p className='text-slate-600 text-lg md:text-xl'>
            Selected works I've done in the past.
          </p>
        </div>

        {/* Work Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto'>
          {workProjects.map((project) => (
            <div
              key={project.id}
              className='bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300'
            >
              {/* Logo/Project Name */}
              <div className='mb-4'>
                <div className='text-slate-800 text-xl md:text-2xl font-bold mb-2'>
                  {project.logo}
                </div>
              </div>

              {/* Project Name */}
              <h3 className='text-slate-800 text-lg md:text-xl font-semibold mb-2'>
                {project.name}
              </h3>

              {/* URL if available */}
              {project.url && (
                <a
                  href={`https://${project.url}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-indigo-800 hover:text-indigo-600 transition-colors text-sm md:text-base'
                >
                  {project.url}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Work
