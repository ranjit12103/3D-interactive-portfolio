import React from 'react'
import { words } from '../assets/index'
import '../index.css'

const Hero = () => {
  return (
    <>
        <section id='hero' className='relative overflow-hidden'>
        <div className="absolute top-0 left-0 z-10">
          <img src="/public/images/bg.png" alt="background" />
        </div>
        <div className='hero-layout'>
          {/* LEFT: HERO CONYENT */}
          <header className='flex flex-col justify-center md:w-fullw-screen md:px-20 px-5'>
              <div className="hero-text">
                <h1>
                  Shaping
                  <span className='slide'>
                    <span className='wrapper'>
                      {words.map((word)=>
                      <span key={word.text} className='flex items-center md:gap-3 gap-1 pd-2'>
                        <img 
                        src={word.imgPath}
                        alt={word.text}
                        className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50' />
                        <span>{word.text}</span>
                      </span>)}
                    </span>
                  </span>
                </h1>
                <h1>into Real Projects</h1>
                <h1>that Deliver result</h1>
                <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
                  Hi, I'm Ranjit, a developer based in Pune with passion for code.
                </p>
              </div>
          </header>
          {/* RIGHT: 3D MODEL */}
        </div>
      </section>
    </>
  )
}

export default Hero
