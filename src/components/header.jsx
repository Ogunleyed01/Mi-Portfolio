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
      <div className='flex justify-between p-8 text-amber-200'>
          <div className='text-2xl text-bold'>E-Dave</div>
          <i 
            className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu-alt-right'} text-3xl cursor-pointer transition-transform duration-300`}
            onClick={toggleMenu}
          ></i>
      </div>
      
      {isMenuOpen && (
        <>
          <div 
            className='fixed inset-0 bg-black/50 z-40' 
            onClick={closeMenu}
          ></div>
          <div className='absolute top-0 right-0 w-64 h-full bg-fuchsia-100 shadow-2xl z-50'>
            <div className='p-8 border-b-2 border-fuchsia-900/30'>
              <div className='flex justify-between items-center'>
                <div className='text-2xl font-extrabold text-fuchsia-900'>Menu</div>
                <i 
                  className='bx bx-x text-3xl cursor-pointer text-fuchsia-900 hover:text-fuchsia-700 transition-colors' 
                  onClick={closeMenu}
                ></i>
              </div>
            </div>
            <div className='flex flex-col gap-2 p-4 mt-4'>
              <a href='#home' onClick={closeMenu} className='px-4 py-3 text-lg font-semibold text-white hover:text-white hover:bg-fuchsia-800 transition-all rounded-lg border border-fuchsia-200'>Home</a>
              <a href='#about' onClick={closeMenu} className='px-4 py-3 text-lg font-semibold text-white hover:text-white hover:bg-fuchsia-800 transition-all rounded-lg border border-fuchsia-200'>About</a>
              <a href='#work' onClick={closeMenu} className='px-4 py-3 text-lg font-semibold text-white hover:text-white hover:bg-fuchsia-800 transition-all rounded-lg border border-fuchsia-200'>Work</a>
              <a href='#contact' onClick={closeMenu} className='px-4 py-3 text-lg font-semibold text-white hover:text-white hover:bg-fuchsia-800 transition-all rounded-lg border border-fuchsia-200'>Contact</a>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Header