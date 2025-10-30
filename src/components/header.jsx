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
          <div className='absolute top-0 right-0 w-64 h-full bg-fuchsia-900/95 backdrop-blur-sm text-white shadow-2xl z-50'>
            <div className='p-8 border-b border-amber-200/20'>
              <div className='flex justify-between items-center'>
                <div className='text-xl font-bold text-amber-200'>Menu</div>
                <i 
                  className='bx bx-x text-3xl cursor-pointer text-amber-200 hover:text-white transition-colors' 
                  onClick={closeMenu}
                ></i>
              </div>
            </div>
            <div className='flex flex-col gap-1 p-4 mt-4'>
              <a href='#home' onClick={closeMenu} className='px-4 py-3 text-amber-200 hover:text-white hover:bg-amber-200/10 transition-all rounded-lg'>Home</a>
              <a href='#about' onClick={closeMenu} className='px-4 py-3 text-amber-200 hover:text-white hover:bg-amber-200/10 transition-all rounded-lg'>About</a>
              <a href='#work' onClick={closeMenu} className='px-4 py-3 text-amber-200 hover:text-white hover:bg-amber-200/10 transition-all rounded-lg'>Work</a>
              <a href='#contact' onClick={closeMenu} className='px-4 py-3 text-amber-200 hover:text-white hover:bg-amber-200/10 transition-all rounded-lg'>Contact</a>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Header