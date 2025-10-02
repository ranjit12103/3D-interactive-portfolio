import React from 'react'
import Home from './sections/Home'
import Showcase from './sections/Showcase'
import NavBar from './components/NavBar'
import LogoShowcase from './sections/LogoShowcase'
import FeatureCards from './sections/FeatureCards'
import ExperiencedSection from './sections/ExperiencedSection'
import Projects from './sections/Projects'
import TechStack from './sections/TechStack'


export default function App() {
  
  return (
    <>
      <NavBar />
      <Home />
      <Showcase/>
      <LogoShowcase />
      <FeatureCards />
      <ExperiencedSection />
      <Projects />
      <TechStack />
    </>
  )
}

