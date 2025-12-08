import React, { useState, useEffect } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import headshot from '../images/headshot.png'
import abstractbg1 from '../images/purple-design-background.png'
import abstractbg2 from '../images/abstract2.jpg'

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [visibleSections, setVisibleSections] = useState(new Set())

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => new Set(prev).add(entry.target.id))
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('[data-animate]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])



  return (
    <div>
        <section className='bg-indigo-900 bg-no-repeat bg-cover bg-center h-[50vh] relative' style={{backgroundImage: `url(${abstractbg1})`}}>
            <div className='absolute inset-0 bg-indigo-800/60'></div>
            <div className='relative z-20'>
                <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </div>
            <div className='p-11 relative z-10'>
                <h2 className='text-amber-200 text-4xl font-extrabold animate-fade-in-up'>
                    Frontend 
                    <br />Developer.
                </h2>
                {/* <div className='w-2 h-2 bg-white rounded'></div> */}
                <p className='text-white mt-6 animate-fade-in-up animation-delay-200'>
                    I enjoy crafting solid and scalable frontend products with great user experiences.
                </p>
                <p className='text-sm text-amber-200 mt-2 animate-fade-in-up animation-delay-400'>
                    Beyond coding, I bring UI/UX design principles and graphic design skills to craft interfaces that are not only functional but also aesthetically appealing
                </p>
            </div>
        </section>
        <section 
            className='h-[50vh] bg-stone-100 bg-cover bg-center flex items-center justify-center relative'
            style={{backgroundImage: `url(${abstractbg2})`}}
        >
            <div className='absolute inset-0 bg-stone-50/80'></div>
            <div 
                id="headshot-section"
                data-animate
                className={`relative z-10 rounded-2xl p-3 edave-border flex transition-all duration-1000 ${
                    visibleSections.has('headshot-section') 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-0 translate-y-10 scale-95'
                }`}
            >
                {/* <div className='absolute left-2 top-0 bottom-0 flex items-center'>
                    <div className='vertical-text text-fuchsia-900 font-medium text-xs'>E-DAVE E-DAVE E-DAVE E-DAVE</div>
                </div> */}
                <img 
                    src={headshot} 
                    alt="edave" 
                    className='w-55 rounded-xl mx-auto transition-transform duration-300 hover:scale-105'
                />
                {/* <div className='absolute right-2 top-0 bottom-0 flex items-center'>
                    <div className='vertical-text-reverse text-fuchsia-900 font-medium text-xs'>E-DAVE E-DAVE E-DAVE E-DAVE</div>
                </div> */}
            </div>
        </section>
        <section 
            id="skills-section"
            data-animate
            className={`flex flex-col justify-center h-[66vh] bg-gray-100 p-12 pb-16 transition-all duration-1000 ${
                visibleSections.has('skills-section') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
            }`}
        >
            <h2 className='text-slate-700 text-4xl font-extrabold mb-2'>Design</h2>
            <p>I don't just move pixels - I shape experiences. Most times, I'm in the code, experimenting with layouts, refining aesthetics, and balancing form with function. My aim? Seamless user journeys wrapped in modern, thoughtful design.</p>
            <h2 className='text-slate-700 text-4xl font-extrabold mt-10 mb-2'>Engineering</h2>
            <p>When it comes to building javaScript applications, I bring the right tools - and the right mindset. Whether working with frameworks or from scratch, I build performant, scalable solutions that hold up under real-world demands. Speed and stability are my north stars.</p>
        </section>
        <section 
            id="work-section"
            data-animate
            className={`bg-indigo-900 h-[46vh] p-5 pt-12 pb-16 transition-all duration-1000 ${
                visibleSections.has('work-section') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
            }`}
        >
            <div className='bg-indigo-50 h-[20rem] p-12'>
                <h2 className='text-slate-700 text-3xl font-extrabold'>
                    I Design <br />
                    & build 
                </h2>
                <p className='pb-8'>Colab gigs, web apps <br /> and experimentals.</p>

                <a href="#" >
                    <div className='flex items-center justify-center border border-indigo-800 text-indigo-800 w-40 h-10 hover:bg-indigo-800 hover:text-white hover:scale-105 transition-all duration-300 transform'>
                        see my work
                        <i className='bx bx-right-arrow-alt transition-transform duration-300 group-hover:translate-x-1'></i>
                    </div>
                </a>
            </div>
        </section>
        <section 
            id="contact-section"
            data-animate
            className={`pb-16 transition-all duration-1000 ${
                visibleSections.has('contact-section') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
            }`}
        >
            <div className='p-12'>
                <h3 className='text-slate-700 text-3xl font-extrabold mb-7'>Send me a message</h3>
                <p>Got a question, a gig, or just want to say hi? Contact me.</p>

              

                <form className='m-2 mt-10 flex flex-col gap-4'> 
                    <label htmlFor="name" className='transition-all duration-300'>Your Name</label>
                    <input 
                        name="name"
                        className='border-b border-gray-500 focus:outline-none focus:ring-0 focus:border-indigo-800 text-slate-800 transition-all duration-300' 
                        type="text" 
                        placeholder='Enter your name'
                        required
                    />

                    <label htmlFor="email" className='transition-all duration-300'>Email-address</label>
                    <input 
                        name="email"
                        className='border-b border-gray-500 focus:outline-none focus:ring-0 focus:border-indigo-800 text-slate-800 transition-all duration-300' 
                        type="email" 
                        placeholder='Enter your email address'
                        required
                    />

                    <label htmlFor="message" className='transition-all duration-300'>Your message</label>
                    <textarea 
                        name="message"
                        className='border-b border-gray-500 focus:outline-none focus:ring-0 focus:border-indigo-800 text-slate-800 transition-all duration-300' 
                        rows='3' 
                        placeholder='Hi E-Dave, I think you can work with me at my company to build and bring our ideas to life. How soon can you hop on to discuss this?'
                        required
                    />

                    <button className='mt-10 flex items-center gap-3 justify-center border border-indigo-800 text-indigo-800 w-40 h-10 cursor-pointer hover:bg-indigo-800 hover:text-white hover:scale-105 transition-all duration-300 transform'>
                        shoot
                        <i className='bx bx-right-arrow-alt transition-transform duration-300 group-hover:translate-x-1'></i>
                    </button>
                </form>
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default Landing
