import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-indigo-900 text-white py-12 px-8'>
        <div className='max-w-6xl mx-auto'>
            {/* Main Footer Content */}
            <div className='flex flex-col md:flex-row justify-between items-start gap-8 mb-8'>
                {/* SAY HELLO Section */}
                <div>
                    <h3 className='text-white font-bold text-xl uppercase mb-4'>SAY HELLO</h3>
                    <div className='flex flex-col gap-2'>
                        <a href='https://wa.me/2348059494191' className='text-indigo-300 hover:text-indigo-200 transition-colors'>
                            hello@edave
                        </a>
                        <a href='https://t.me/Edave_digitals' target='_blank' rel='noopener noreferrer' className='text-indigo-300 hover:text-indigo-200 transition-colors'>
                            t.me/edave
                        </a>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className='flex flex-col gap-2'>
                    <Link to='/work' className='text-indigo-300 hover:text-indigo-200 transition-colors'>My Work</Link>
                    <Link to='/resume' className='text-indigo-300 hover:text-indigo-200 transition-colors'>My Résumé</Link>
                </div>
            </div>

            {/* Separator */}
            <div className='border-t border-white/20 my-8'></div>

            {/* Copyright and Social Links */}
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                <div className='text-white'>
                    &copy; David Ogunleye 2025
                </div>
                <div className='flex gap-4 text-white'>
                    <a href='https://x.com/edave_digitals' target='_blank' rel='noopener noreferrer' className='hover:text-indigo-300 transition-colors'>
                        <i className='bx bxl-twitter'></i>
                    </a>
                    <a href='https://github.com/Ogunleyed01' target='_blank' rel='noopener noreferrer' className='hover:text-indigo-300 transition-colors'>
                        <i className='bx bxl-github'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/david-ogunleye-b48032281/' target='_blank' rel='noopener noreferrer' className='hover:text-indigo-300 transition-colors'>
                        <i className='bx bxl-linkedin'></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer