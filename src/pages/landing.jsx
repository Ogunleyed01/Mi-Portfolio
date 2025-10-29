import React from 'react'
import Header from '../components/header'
import headshot from '../images/headshot.png'

const Landing = () => {
  return (
    <div>
        <div className='bg-fuchsia-900 h-[50vh]'>
            <Header />
            <div className='p-11'>
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
        </div>
        <div className='h-[50vh] bg-amber-100 flex items-center justify-center'>
            <img src={headshot} alt="edave" className='w-55'/>
        </div>
        <div className=' flex flex-col justify-center h-[66vh] bg-gray-100 p-12'>
            <h2 className='text-fuchsia-900 text-4xl font-extrabold mb-2'>Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur voluptate quaerat, corporis unde ipsam ducimus odio magni, quisquam totam quis vitae neque mollitia facilis. Distinctio veritatis quo doloribus. Totam, quod.</p>
            <h2 className='text-fuchsia-900 text-4xl font-extrabold mt-10 mb-2'>Engineering</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur voluptate quaerat, corporis unde ipsam ducimus odio magni, quisquam totam quis vitae neque mollitia facilis. Distinctio veritatis quo doloribus. Totam, quod.</p>
        </div>
        <div className='bg-fuchsia-900 h-[46vh] p-5 pt-12'>
            <div className='bg-fuchsia-100 h-[20rem] p-12'>
                <h2 className='text-fuchsia-900 text-3xl font-extrabold'>
                    I Design <br />
                    & build 
                </h2>
                <p className='pb-8'>Colab gigs, web apps <br /> and experimentals.</p>

                <a href="#" >
                    <div className='flex items-center justify-center border border-fuchsia-900 text-fuchsia-900 w-40 h-10'>
                        see my work
                        <i className='bx bx-right-arrow-alt'></i>
                    </div>
                </a>
            </div>
        </div>
        <section>
            <div className='p-12'>
                <h3 className='text-fuchsia-900 text-3xl font-extrabold mb-7'>Send me a message</h3>
                <p>Got a question, a gig, or just want to say hi? Contact me.</p>

                <form action="contactMe" className='m-2 mt-10 flex flex-col gap-4'> 
                    <label htmlFor="name">Your Name</label>
                    <input className='border-b border-gray-500 focus:outline-none focus:ring-0 text-fuchsia-900' type="text" placeholder='Enter your name'/>

                    <label htmlFor="email">Email-address</label>
                    <input className='border-b border-gray-500 focus:outline-none focus:ring-0 text-fuchsia-900' type="email" placeholder='Enter your email address' />

                    <label htmlFor="message">Your message</label>
                    <textarea className='border-b border-gray-500 focus:outline-none focus:ring-0 text-fuchsia-900' rows='3' type="text" placeholder='Hi E-Dave, I think you can work with me at my company to build and bring our ideas to life. How soon can you hop on to discuss this? ' />

                    <button className='mt-10 flex items-center gap-3 justify-center border border-fuchsia-900 text-fuchsia-900 w-40 h-10 cursor-pointer'>
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
