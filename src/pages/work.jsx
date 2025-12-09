import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'

const Work = () => {
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

  const workProjects = [
    {
      id: 1,
      name: 'Audiophile',
      logo: 'AUDIOPHILE',
      image: '/audiophile.png',
      url: 'audiophile-ecommerce-olive.vercel.app/',
      description: 'Audiophile is a modern e-commerce web app built during the HNG Internship, featuring responsive product pages, smooth navigation, and cart functionality. It showcases premium audio products and emphasizes clean UI, performance, and real-world e-commerce workflows'
    },
    {
      id: 2,
      name: 'Extensions Manager',
      logo: 'EXTENSIONS MANAGER',
      image: '/extensions-manager.png',
      url: 'extensions-manager-seven.vercel.app/',
      description: 'A modern web application for managing browser extensions with a clean, responsive interface and theme switching capabilities'
    },
    {
      id: 3,
      name: 'Ticket Manager',
      logo: 'TICKET MANAGER',
      image: '/ticket-manager.png',
      url: 'ticket-manager-react.vercel.app/',
      description: 'The Ticket Manager App is a task-tracking tool designed to help teams create, assign, and monitor tickets efficiently. It features a clean interface, status updates, and organized workflows, focusing on usability, collaboration, and real-world project management functionality'
    },
    {
      id: 4,
      name: 'E-Dave Portfolio',
      logo: 'E-DAVE',
      image: '/edave.png',
      url: 'edave.netlify.app',
      description: 'This portfolio website is a personal showcase of my frontend development work, featuring selected projects, skills, and professional experience. It’s built with a responsive design, smooth navigation, and reusable components, providing a clear and engaging way for users to explore my work and learn more about me as a developer.'
    },
    {
      id: 5,
      name: 'PL Platform',
      logo: 'PL',
      image: '/pl.png',
      url: 'peer-learning-1ahk.onrender.com/',
      description: 'PL (Peer Learning), a peer-to-peer skill exchange platform is a web application that connects students who want to teach a skill with those who want to learn a skill. I worked collaboratively with another Associate level Frontend developer. Based on the UI/UX Figma design, I built 4-5 pages of the app with devices responsiveness integrated'
    }
  ]

  return (
    <div className='min-h-screen bg-stone-50'>
      {/* Header */}
      <div className='flex justify-between items-center p-6 md:p-8 lg:p-10 text-slate-800 relative z-[70]'>
        <Link to="/">
          <div className='text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-800'>E-Dave</div>
        </Link>
        {/* Hamburger Menu - Only rendered on mobile */}
        {isMobile && (
          <i 
            className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu-alt-right'} text-3xl cursor-pointer transition-all duration-300 relative z-[70] ${isMenuOpen ? 'text-indigo-800' : 'text-slate-700'}`}
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
          {workProjects.map((project) => (
            <a
              key={project.id}
              href={`https://${project.url}`}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden cursor-pointer block'
            >
              {/* Project Image */}
              <div className='mb-4 overflow-hidden rounded-lg'>
                <img 
                  src={project.image} 
                  alt={project.name}
                  className='w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105'
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Project Name */}
              <h3 className='text-slate-800 text-lg md:text-xl font-semibold mb-2'>
                {project.name}
              </h3>

              {/* Description */}
              <p className='text-slate-600 text-sm md:text-base'>
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Work
