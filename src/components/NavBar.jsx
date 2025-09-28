import React, { useEffect, useState } from 'react'
import '../components/HeroModels/Navbar.css'
import { navLinks } from '../assets/index'

const Navbar = () => {
  const [ scrolled, setScrolled ] = useState(false);

  useEffect(() => {
    const handleScroll = () =>{
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
        <div className="inner">
            <a  className='logo text-3xl font-medium' href="#hero">
                <span className='text-4xl font-bold'>R</span>anjit.<span className='text-4xl font-bold'>A</span>i
            </a>

            <nav className='desktop'>
              <ul>
                {navLinks.map(({link, name}) => 
                <li key={link}>
                  <a href={link}>
                    <span>{name}</span>
                    <span className='underline' />
                  </a>
                </li>
              )}
              </ul>
            </nav>
            
            <a href="#concat" className='contact-btn group'>
              <div className="inner">
                <span>Contact Me</span>
              </div>
            </a>
        </div>
    </header>
  )
}

export default Navbar
