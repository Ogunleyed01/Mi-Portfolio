import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'

const Work = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [tappedCardId, setTappedCardId] = useState(null)

  // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Close tapped card when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobile && tappedCardId && !e.target.closest('.project-card')) {
        setTappedCardId(null)
      }
    }

    if (tappedCardId) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [tappedCardId, isMobile])

  const handleCardTap = (projectId, e) => {
    if (isMobile) {
      e.preventDefault()
      e.stopPropagation()
      setTappedCardId(tappedCardId === projectId ? null : projectId)
    }
  }

  const workProjects = [
    {
      id: 1,
      name: 'Audiophile',
      logo: 'AUDIOPHILE',
      image: '/audiophile.png',
      url: 'audiophile-ecommerce-olive.vercel.app/',
      github: 'https://github.com/Ogunleyed01/Audiophile-ecommerce',
      description: 'Audiophile is a modern e-commerce web app built during the HNG Internship, featuring responsive product pages, smooth navigation, and cart functionality. It showcases premium audio products and emphasizes clean UI, performance, and real-world e-commerce workflows'
    },
    {
      id: 2,
      name: 'Extensions Manager',
      logo: 'EXTENSIONS MANAGER',
      image: '/extensions-manager.png',
      url: 'extensions-manager-seven.vercel.app/',
      github: 'https://github.com/Ogunleyed01/Extensions-manager',
      description: 'A modern web application for managing browser extensions with a clean, responsive interface and theme switching capabilities'
    },
    {
      id: 3,
      name: 'Ticket Manager',
      logo: 'TICKET MANAGER',
      image: '/ticket-manager.png',
      url: 'ticket-manager-react.vercel.app/',
      github: 'https://github.com/Ogunleyed01/Ticket-manager-react',
      description: 'The Ticket Manager App is a task-tracking tool designed to help teams create, assign, and monitor tickets efficiently. It features a clean interface, status updates, and organized workflows, focusing on usability, collaboration, and real-world project management functionality'
    },
    {
      id: 4,
      name: 'E-Dave Portfolio',
      logo: 'E-DAVE',
      image: '/edave.png',
      url: 'edave.netlify.app',
      github: 'https://github.com/Ogunleyed01/Mi-Portfolio',
      description: 'This portfolio website is a personal showcase of my frontend development work, featuring selected projects, skills, and professional experience. It\'s built with a responsive design, smooth navigation, and reusable components, providing a clear and engaging way for users to explore my work and learn more about me as a developer.'
    },
    {
      id: 5,
      name: 'PL Platform',
      logo: 'PL',
      image: '/pl.png',
      url: 'peer-learning-1ahk.onrender.com/',
      github: 'https://github.com/olamidefasogbon/P2P-LMS',
      description: 'PL (Peer Learning), a peer-to-peer skill exchange platform is a web application that connects students who want to teach a skill with those who want to learn a skill. I worked collaboratively with another Associate level Frontend developer. Based on the UI/UX Figma design, I built 4-5 pages of the app with devices responsiveness integrated'
    }
  ]

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
        {/* Title Section */}
        <div className='text-center mb-12 md:mb-16'>
          <h1 className='text-slate-800 text-2xl md:text-2xl lg:text-2xl font-bold mb-4'>
            /work.
          </h1>
          <p className='text-slate-600 text-lg md:text-xl'>
            Selected works I've done in the past.
          </p>
        </div>

        {/* Work Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto'>
          {workProjects.map((project) => {
            const isTapped = tappedCardId === project.id
            const showOverlay = isMobile ? isTapped : false
            
            return (
              <div
                key={project.id}
                className='project-card bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group relative'
              >
                {/* Project Image */}
                <div 
                  className='mb-4 overflow-hidden rounded-lg relative'
                >
                  {isMobile ? (
                    <>
                      {/* Mobile: Image container that triggers tap */}
                      <div
                        className='w-full cursor-pointer'
                        onClick={(e) => handleCardTap(project.id, e)}
                      >
                        <img 
                          src={project.image} 
                          alt={project.name}
                          className='w-full h-auto rounded-lg transition-transform duration-300 pointer-events-none'
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      {/* Mobile: Overlay that appears on tap */}
                      {showOverlay && (
                        <div 
                          className='absolute inset-0 bg-black/70 flex items-center justify-center gap-6 rounded-lg z-10'
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a
                            href={`https://${project.url}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='w-14 h-14 flex items-center justify-center bg-white rounded-full hover:bg-indigo-800 hover:scale-110 hover:shadow-lg transition-all duration-300 [&:hover_i]:text-white'
                            onClick={() => setTappedCardId(null)}
                          >
                            <i className='bx bx-link-external text-2xl text-indigo-800 transition-colors duration-300'></i>
                          </a>
                          <a
                            href={project.github}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='w-14 h-14 flex items-center justify-center bg-white rounded-full hover:bg-indigo-800 hover:scale-110 hover:shadow-lg transition-all duration-300 [&:hover_i]:text-white'
                            onClick={() => setTappedCardId(null)}
                          >
                            <i className='bx bxl-github text-2xl text-indigo-800 transition-colors duration-300'></i>
                          </a>
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      {/* Desktop/Tablet: Image with hover effect */}
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className='w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105'
                        loading="lazy"
                        decoding="async"
                      />
                      {/* Desktop/Tablet: Overlay on hover */}
                      <div className='absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 rounded-lg pointer-events-none group-hover:pointer-events-auto'>
                        <a
                          href={`https://${project.url}`}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='w-14 h-14 flex items-center justify-center bg-white rounded-full hover:bg-indigo-800 hover:scale-110 hover:shadow-lg transition-all duration-300 [&:hover_i]:text-white pointer-events-auto'
                        >
                          <i className='bx bx-link-external text-2xl text-indigo-800 transition-colors duration-300'></i>
                        </a>
                        <a
                          href={project.github}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='w-14 h-14 flex items-center justify-center bg-white rounded-full hover:bg-indigo-800 hover:scale-110 hover:shadow-lg transition-all duration-300 [&:hover_i]:text-white pointer-events-auto'
                        >
                          <i className='bx bxl-github text-2xl text-indigo-800 transition-colors duration-300'></i>
                        </a>
                      </div>
                    </>
                  )}
                </div>

              {/* Project Name */}
              <h3 className='text-slate-800 text-lg md:text-xl font-semibold mb-2'>
                {project.name}
              </h3>

              {/* Description */}
              <p className='text-slate-600 text-sm md:text-base'>
                {project.description}
              </p>
              </div>
            )
          })}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Work
