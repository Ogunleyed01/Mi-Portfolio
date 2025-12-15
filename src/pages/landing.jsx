import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'
import headshot from '../images/headshot.png'
import abstractbg1 from '../images/purple-design-background.png'
import abstractbg2 from '../images/abstract2.jpg'

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

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

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission to WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Format the message for WhatsApp
    const messageText = `Hello E-Dave!

*Name:* ${formData.name}
*Email:* ${formData.email}

*Message:*
${formData.message}`
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(messageText)
    
    // WhatsApp Web API URL (removing + from phone number)
    const phoneNumber = '2348059494191'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank')
    
    // Clear form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }



  return (
    <div>
        {/* Combined Hero and Headshot Section - Row on tablet/desktop */}
        <div className='flex flex-col md:flex-row min-h-[50vh] md:min-h-[70vh] lg:min-h-[80vh]'>
            {/* Hero Section */}
            <section className='bg-indigo-900 bg-no-repeat bg-cover bg-center flex-1 md:flex-[2] relative overflow-hidden' style={{backgroundImage: `url(${abstractbg1})`}}>
                <div className='absolute inset-0 bg-indigo-800/70 md:bg-indigo-800/60'></div>
                
                {/* Header - Full header on mobile, only logo on tablet/desktop */}
                <div className='relative z-20'>
                    <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                </div>
                
                {/* Hero Content */}
                <div className='relative z-10 h-full  px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20'>
                    <div className='max-w-2xl md:flex md:flex-col md:justify-center md:px-16'>
                        <h2 className='text-amber-200 text-4xl md:text-6xl lg:text-7xl font-extrabold animate-fade-in-up leading-tight mb-4 md:mb-6'>
                            Frontend 
                            <br />Developer.
                        </h2>
                        <p className='text-white mt-4 md:mt-6 text-base md:text-xl lg:text-2xl leading-relaxed animate-fade-in-up animation-delay-200 max-w-xl'>
                            I enjoy crafting solid and scalable frontend products with great user experiences.
                        </p>
                        <p className='text-sm md:text-lg lg:text-xl text-amber-200/90 mt-4 md:mt-6 animate-fade-in-up animation-delay-400 max-w-xl leading-relaxed'>
                            Beyond coding, I bring UI/UX design principles and graphic design skills to craft interfaces that are not only functional but also aesthetically appealing
                        </p>
                    </div>
                </div>
            </section>
            
            {/* Headshot Section */}
            <section 
                className='h-[50vh] md:h-auto bg-stone-100 bg-cover bg-center flex items-center justify-center relative md:w-2/5 lg:w-1/3'
                style={{backgroundImage: `url(${abstractbg2})`}}
            >
                <div className='absolute inset-0 bg-stone-50/80'></div>
                
                {/* Hamburger Menu in Headshot Section - Only on tablet/desktop */}
                <div className='hidden md:block absolute top-6 md:top-8 right-6 md:right-8 z-30'>
                    <i 
                        className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu-alt-right'} text-3xl md:text-4xl lg:text-5xl cursor-pointer transition-all duration-300 ${isMenuOpen ? 'text-indigo-800' : 'text-slate-700'}`}
                        onClick={isMenuOpen ? () => setIsMenuOpen(false) : () => setIsMenuOpen(true)}
                    ></i>
                </div>
                
                <div 
                    id="headshot-section"
                    data-animate
                    className={`relative z-10 rounded-2xl p-2 md:p-4 lg:p-5 edave-border flex transition-all duration-1000 ${
                        visibleSections.has('headshot-section') 
                            ? 'opacity-100 translate-y-0 scale-100' 
                            : 'opacity-0 translate-y-10 scale-95'
                    }`}
                >
                    <img 
                        src={headshot} 
                        alt="edave" 
                        className='w-55 md:w-72 lg:w-80 rounded-xl mx-auto transition-transform duration-300 hover:scale-105'
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </section>
        </div>
        <section 
            id="skills-section"
            data-animate
            className={`flex flex-col justify-center min-h-[85vh] md:h-[66vh] bg-gray-100 p-8 md:p-12 pb-12 md:pb-16 transition-all duration-1000 ${
                visibleSections.has('skills-section') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
            }`}
        >
            <div className='max-w-4xl mx-auto w-full text-lg md:w-auto'>
                <h2 className='text-slate-800 text-4xl font-extrabold mb-2'>Design</h2>
                <p>I don't just move pixels - I shape experiences. Most times, I'm in the code, experimenting with layouts, refining aesthetics, and balancing form with function. My aim? Seamless user journeys wrapped in modern, thoughtful design.</p>
                <h2 className='text-slate-800 text-4xl font-extrabold mt-10 mb-2'>Engineering</h2>
                <p>When it comes to building javaScript applications, I bring the right tools - and the right mindset. Whether working with frameworks or from scratch, I build performant, scalable solutions that hold up under real-world demands. Speed and stability are my north stars.</p>
            </div>
        </section>
        <div className='flex flex-col md:flex-row md:gap-1'>
            <section 
                id="work-section"
                data-animate
                className={`bg-indigo-900 h-[46vh] md:h-[46vh] p-5 pt-12 pb-16 flex items-center justify-center flex-1 transition-all duration-1000 ${
                    visibleSections.has('work-section') 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                }`}
            >
                <div className='bg-indigo-50 h-80 p-12'>
                    <h2 className='text-slate-800 text-3xl font-extrabold'>
                        I Design <br />
                        & build 
                    </h2>
                    <p className='pb-8'>Colab gigs, web apps <br /> and experimentals.</p>

                    <Link to="/work">
                        <div className='flex items-center justify-center border border-indigo-800 text-indigo-800 w-40 h-10 hover:bg-indigo-800 hover:text-white transition-all duration-300'>
                            see my work
                            <i className='bx bx-right-arrow-alt transition-transform duration-300 group-hover:translate-x-1'></i>
                        </div>
                    </Link>
                </div>
            </section>
            <section 
                id="resume-section"
                data-animate
                className={`bg-indigo-900 h-[46vh] md:h-[46vh] p-5 pt-12 pb-16 flex items-center justify-center flex-1 transition-all duration-1000 ${
                    visibleSections.has('resume-section') 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                }`}
            >
                <div className='bg-indigo-50 h-80 p-12'>
                    <h2 className='text-slate-800 text-3xl font-extrabold'>
                        My Skills <br />
                        & Experience 
                    </h2>
                    <p className='pb-8'>Frontend development, <br /> UI/UX design & more.</p>

                    <Link to="/resume">
                        <div className='flex items-center justify-center border border-indigo-800 text-indigo-800 w-40 h-10 hover:bg-indigo-800 hover:text-white transition-all duration-300'>
                            view resume
                            <i className='bx bx-right-arrow-alt transition-transform duration-300 group-hover:translate-x-1'></i>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
        <section 
            id="contact-section"
            data-animate
            className={`pb-16 transition-all duration-1000 ${
                visibleSections.has('contact-section') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
            }`}
        >
            <div className='p-12 md:max-w-2xl md:mx-auto'>
                <h3 className='text-slate-800 text-3xl font-extrabold mb-7'>Send me a message</h3>
                <p>Got a question, a gig, or just want to say hi? Contact me.</p>

                <form onSubmit={handleSubmit} className='m-2 mt-10 flex flex-col gap-4'> 
                    <label htmlFor="name" className='transition-all duration-300'>Your Name</label>
                    <input 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className='border-b border-gray-500 focus:outline-none focus:ring-0 focus:border-indigo-800 text-slate-800 transition-all duration-300' 
                        type="text" 
                        placeholder='Enter your name'
                        required
                    />

                    <label htmlFor="email" className='transition-all duration-300'>Email-address</label>
                    <input 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className='border-b border-gray-500 focus:outline-none focus:ring-0 focus:border-indigo-800 text-slate-800 transition-all duration-300' 
                        type="email" 
                        placeholder='Enter your email address'
                        required
                    />

                    <label htmlFor="message" className='transition-all duration-300'>Your message</label>
                    <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className='border-b border-gray-500 focus:outline-none focus:ring-0 focus:border-indigo-800 text-slate-800 transition-all duration-300' 
                        rows='3' 
                        placeholder='Hi E-Dave, I think you can work with me at my company to build and bring our ideas to life. How soon can you hop on to discuss this?'
                        required
                    />

                    <button type="submit" className='mt-10 flex items-center gap-3 justify-center border border-indigo-800 text-indigo-800 w-40 h-10 cursor-pointer hover:bg-indigo-800 hover:text-white transition-all duration-300'>
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
