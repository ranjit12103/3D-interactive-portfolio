import React from 'react'
import Hero from './sections/Hero'
import Showcase from './sections/Showcase'
import NavBar from './components/Navbar'
import LogoShowcase from './sections/LogoShowcase'
import FeatureCards from './sections/FeatureCards'
import ExperiencedSection from './sections/ExperiencedSection'


export default function App() {
  
  return (
    <>
      <NavBar />
      <Hero />
      <Showcase/>
      <LogoShowcase />
      <FeatureCards />
      <ExperiencedSection />
    </>
  )
}

