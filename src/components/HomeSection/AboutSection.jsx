import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '../../styles/global.css'

const AboutSection = () => {
  return (
    <section className="slanted-section">
      <div className="container mx-auto px-4 slanted-content">
        <h2 className="mb-5 text-3xl text-center font-extrabold text-[#b6b6b6] mt-10">About</h2>
        <p className="text-lg text-gray-700 mb-8 text-center justify-center">
          The idea for this project came from a personal experience where finding a rental car was a cumbersome process. Our goal was to simplify this experience and provide a seamless car rental service through an easy-to-use platform. This project was inspired by the desire to leverage technology to solve everyday problems, and it serves as a portfolio project for ALX School. You can learn more about our journey and the technologies we used in this project below.
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-12 lg:space-y-0 lg:space-x-12">
          <div className="flex flex-col items-center">
            <Image src="/profile1.jpg" alt="Team Member" width={100} height={100} className="rounded-full mb-4" />
            <h4 className="text-xl font-medium mb-2">KHALIF NOOR</h4>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/in/yourprofile" className="text-blue-600">LinkedIn</Link>
              <Link href="https://github.com/yourprofile" className="text-gray-800">GitHub</Link>
              <Link href="https://twitter.com/yourprofile" className="text-blue-400">Twitter</Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
            <button className='button'>
                <Link href="https://github.com/yourgithubrepo" className="text-blue-600">GitHub Repository</Link>
            </button>
          
        </div>
      </div>
    </section>
  )
}

export default AboutSection
