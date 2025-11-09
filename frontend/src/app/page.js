'use client'

import { useState, useEffect } from 'react'
import Preloader from '@/components/Preloader/Preloader'
import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import Courses from '@/components/Courses/Courses'
import SuccessStories from '@/components/SuccessStories/SuccessStories'
import HowItWork from '@/components/HowItWork/HowItWork'
import WhyChoose from '@/components/WhyChoose/WhyChoose'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <>
      {loading && <Preloader />}
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}>
        <Navbar />
        <Hero />
        <Courses />
        <SuccessStories />
        <HowItWork />
        <WhyChoose />
        <Contact />
        <Footer />
      </div>
    </>
  )
}