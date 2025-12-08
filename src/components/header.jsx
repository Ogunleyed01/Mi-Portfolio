import React from 'react'

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <div className='flex justify-between p-8 text-amber-200 relative'>
          <div className='text-2xl text-bold'>E-Dave</div>
          <i 
            className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu-alt-right'} text-3xl cursor-pointer transition-all duration-300 relative z-[60] ${isMenuOpen ? 'text-indigo-800' : 'text-amber-200'}`}
            onClick={isMenuOpen ? closeMenu : toggleMenu}
          ></i>
      </div>
      
      {isMenuOpen && (
        <>
          {/* Overlay - only on tablet/desktop */}
          <div 
            className='hidden md:block fixed inset-0 bg-black/20 z-40'
            onClick={closeMenu}
          ></div>
          
          {/* Menu - full screen on mobile, sidebar on tablet/desktop */}
          <div 
            className='fixed top-0 right-0 h-full md:h-auto md:max-h-[85vh] w-full md:w-1/4 lg:w-1/5 bg-white z-50 overflow-y-auto shadow-2xl animate-slide-in-right md:top-8 md:right-8'
          >
            <div className='p-8 flex flex-col min-h-screen md:min-h-0 md:py-6'>
              {/* Header with Menu Title */}
              <div className='flex justify-between items-center mb-16'>
                <div className='text-2xl font-bold text-indigo-800'>E-Dave</div>
              </div>

              {/* Navigation Links */}
              <div className='flex flex-col gap-6 mb-16'>
                <a 
                  href='#work' 
                  onClick={closeMenu} 
                  className='text-indigo-800 text-xl hover:text-indigo-600 transition-colors'
                >
                  My Work
                </a>
                <a 
                  href='#resume' 
                  onClick={closeMenu} 
                  className='text-indigo-800 text-xl hover:text-indigo-600 transition-colors'
                >
                  My Résumé
                </a>
              </div>

              {/* SAY HELLO Section */}
              <div className='mt-auto mb-12'>
                <h3 className='text-gray-500 text-sm uppercase mb-6 tracking-wider'>SAY HELLO</h3>
                <div className='flex flex-col gap-3'>
                  <a 
                    href='https://wa.me/2348059494191' 
                    onClick={closeMenu}
                    className='text-indigo-800 text-lg hover:text-indigo-600 transition-colors'
                  >
                    hello@edave
                  </a>
                  <a 
                    href='https://t.me/Edave_digitals' 
                    target='_blank' 
                    rel='noopener noreferrer'
                    onClick={closeMenu}
                    className='text-indigo-800 text-lg hover:text-indigo-600 transition-colors'
                  >
                    t.me/edave
                  </a>
                </div>
              </div>

              {/* Social Media Links */}
              <div className='flex gap-8 text-indigo-800 text-lg'>
                <a 
                  href='https://x.com/edave_digitals' 
                  target='_blank' 
                  rel='noopener noreferrer'
                  onClick={closeMenu}
                  className='hover:text-indigo-600 transition-colors'
                >
                  <i className='bx bxl-twitter'></i>
                </a>
                <a 
                  href='https://github.com/Ogunleyed01' 
                  target='_blank' 
                  rel='noopener noreferrer'
                  onClick={closeMenu}
                  className='hover:text-indigo-600 transition-colors'
                >
                  <i className='bx bxl-github'></i>
                </a>
                <a 
                  href='https://www.linkedin.com/in/david-ogunleye-b48032281/' 
                  target='_blank' 
                  rel='noopener noreferrer'
                  onClick={closeMenu}
                  className='hover:text-indigo-600 transition-colors'
                >
                  <i className='bx bxl-linkedin'></i>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Header