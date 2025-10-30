import React, { useState, useEffect } from 'react'
import Header from '../components/header'
import headshot from '../images/headshot.png'
import abstractbg1 from '../images/purple-design-background.png'
import abstractbg2 from '../images/abstract2.jpg'

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [emailError, setEmailError] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    if (name === 'email' && value && !validateEmail(value)) {
      setEmailError('Please enter a valid email address')
    } else {
      setEmailError('')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address')
      return
    }

    const subject = encodeURIComponent(`Message from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\n\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    )
    
    // Show success message
    setSubmitSuccess(true)
    setEmailError('')
    
    // Reset form
    setFormData({ name: '', email: '', message: '' })
    
    // Create mailto link and copy to clipboard, then show message
    const mailtoLink = `mailto:ogunleyedavid28@gmail.com?subject=${subject}&body=${body}`
    
    // Try to open email client in background
    try {
      const link = document.createElement('a')
      link.href = mailtoLink
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.log('Could not open email client:', error)
    }
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false)
    }, 5000)
  }

  return (
    <div>
        <section className='bg-fuchsia-900 bg-no-repeat bg-cover bg-center h-[50vh] relative' style={{backgroundImage: `url(${abstractbg1})`}}>
            <div className='absolute inset-0 bg-fuchsia-900/60'></div>
            <div className='relative z-20'>
                <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </div>
            <div className='p-11 relative z-10'>
                <h2 className='text-amber-200 text-4xl font-extrabold'>
                    Frontend Developer.
                </h2>
                {/* <div className='w-2 h-2 bg-white rounded'></div> */}
                <p className='text-white mt-6'>
                    I enjoy crafting solid and scalable frontend products with great user experiences.
                </p>
                <p className='text-sm text-amber-200 mt-2'>
                    Beyond coding, I bring UI/UX design principles and graphic design skills to craft interfaces that are not only functional but also aesthetically appealing
                </p>
            </div>
        </section>
        <section 
            className='h-[50vh] bg-amber-100 bg-cover bg-center flex items-center justify-center relative'
            style={{backgroundImage: `url(${abstractbg2})`}}
        >
            <div className='absolute inset-0 bg-amber-100/70'></div>
            <div className='relative z-10 rounded-2xl p-3 edave-border flex'>
                {/* <div className='absolute left-2 top-0 bottom-0 flex items-center'>
                    <div className='vertical-text text-fuchsia-900 font-medium text-xs'>E-DAVE E-DAVE E-DAVE E-DAVE</div>
                </div> */}
                <img src={headshot} alt="edave" className='w-55 rounded-xl mx-auto'/>
                {/* <div className='absolute right-2 top-0 bottom-0 flex items-center'>
                    <div className='vertical-text-reverse text-fuchsia-900 font-medium text-xs'>E-DAVE E-DAVE E-DAVE E-DAVE</div>
                </div> */}
            </div>
        </section>
        <section className='flex flex-col justify-center h-[66vh] bg-gray-100 p-12 pb-16'>
            <h2 className='text-fuchsia-900 text-4xl font-extrabold mb-2'>Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur voluptate quaerat, corporis unde ipsam ducimus odio magni, quisquam totam quis vitae neque mollitia facilis. Distinctio veritatis quo doloribus. Totam, quod.</p>
            <h2 className='text-fuchsia-900 text-4xl font-extrabold mt-10 mb-2'>Engineering</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur voluptate quaerat, corporis unde ipsam ducimus odio magni, quisquam totam quis vitae neque mollitia facilis. Distinctio veritatis quo doloribus. Totam, quod.</p>
        </section>
        <section className='bg-fuchsia-900 h-[46vh] p-5 pt-12 pb-16'>
            <div className='bg-fuchsia-100 h-[20rem] p-12'>
                <h2 className='text-fuchsia-900 text-3xl font-extrabold'>
                    I Design <br />
                    & build 
                </h2>
                <p className='pb-8'>Colab gigs, web apps <br /> and experimentals.</p>

                <a href="#" >
                    <div className='flex items-center justify-center border border-fuchsia-900 text-fuchsia-900 w-40 h-10 hover:bg-fuchsia-900 hover:text-white transition-all duration-300'>
                        see my work
                        <i className='bx bx-right-arrow-alt'></i>
                    </div>
                </a>
            </div>
        </section>
        <section className='pb-16'>
            <div className='p-12'>
                <h3 className='text-fuchsia-900 text-3xl font-extrabold mb-7'>Send me a message</h3>
                <p>Got a question, a gig, or just want to say hi? Contact me.</p>

                {submitSuccess && (
                  <div className='mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded'>
                    <p className='font-semibold'>Message sent successfully! Your email client should open shortly.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className='m-2 mt-10 flex flex-col gap-4'> 
                    <label htmlFor="name">Your Name</label>
                    <input 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className='border-b border-gray-500 focus:outline-none focus:ring-0 text-fuchsia-900' 
                        type="text" 
                        placeholder='Enter your name'
                        required
                    />

                    <label htmlFor="email">Email-address</label>
                    <input 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className='border-b border-gray-500 focus:outline-none focus:ring-0 text-fuchsia-900' 
                        type="email" 
                        placeholder='Enter your email address'
                        required
                    />
                    {emailError && <span className='text-red-500 text-sm'>{emailError}</span>}

                    <label htmlFor="message">Your message</label>
                    <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className='border-b border-gray-500 focus:outline-none focus:ring-0 text-fuchsia-900' 
                        rows='3' 
                        placeholder='Hi E-Dave, I think you can work with me at my company to build and bring our ideas to life. How soon can you hop on to discuss this?'
                        required
                    />

                    <button className='mt-10 flex items-center gap-3 justify-center border border-fuchsia-900 text-fuchsia-900 w-40 h-10 cursor-pointer hover:bg-fuchsia-900 hover:text-white transition-all duration-300'>
                        shoot
                        <i className='bx bx-right-arrow-alt'></i>
                    </button>
                </form>
            </div>
        </section>
        <footer className=' flex justify-center items-center text-white h-10 bg-fuchsia-950'>
            &copy; David Ogunleye. 2025
        </footer>
    </div>
  )
}

export default Landing
