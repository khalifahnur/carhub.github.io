import AboutSection from '@/components/HomeSection/AboutSection'
import AvailableCars from '@/components/HomeSection/AvailableCars'
import FeatureSection from '@/components/HomeSection/FeatureSection'
import IntroSection from '@/components/HomeSection/IntroSection'
import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <IntroSection />
        <AvailableCars />
        <FeatureSection />
        <AboutSection />
    </div>
    
  )
}

export default HomePage