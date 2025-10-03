import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../assets/index'
import GlowCard from '../components/HomeModels/GlowCard'

const Testimonials = () => {
  return (
    <section 
        id='testimonials'
        className='flex-center section-padding'>
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader 
                    title={"What Clients Say About Working With Me"}
                sub={'🤝 Client Feedback Highlights'}
                />

                <div className="lg:columns-3 md:columns-2 mt-16">
                    {testimonials.map(({ imgPath, name, mentions, review}) => (
                        <GlowCard card={{ review }}>
                            <div className="flex items-center gap-3" />
                            <img src={imgPath} alt={name} />
                            <div className="">
                                <p className='font-bold'>{name}</p>
                                <p className='text-white-50'>{mentions}</p>
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
  )
}

export default Testimonials
