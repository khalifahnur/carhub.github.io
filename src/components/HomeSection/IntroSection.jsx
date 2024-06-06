import React from 'react'
import Link from 'next/link'

const IntroSection = () => {
  return (
    <div class="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center">
        <div class="text-center lg:text-left lg:w-1/2">
            <h1 class="text-5xl font-bold mb-6">Rent your favorite car in <span class="text-red-600">Easy</span> steps.</h1>
            <p class="text-lg mb-6">Get a car wherever and whenever you need it.</p>
            
        </div>
        <div class="lg:w-1/2 mt-8 lg:mt-0">
            <img src="../../../car.jpeg" alt="Car Image" class="max-w-full rounded-lg" />
        </div>
    </div>
  )
}

export default IntroSection