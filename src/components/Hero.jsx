import { motion } from 'framer-motion'
import React from 'react'
import {hero1, hero6, hero7, tigerwebLogo} from '../assets/index'
import { hero2 } from '../assets/index'
import { hero3 } from '../assets/index'
import { hero4 } from '../assets/index'
import Section from './Section'
import { cover, fill } from 'three/src/extras/TextureUtils.js'
import { FiArrowRight } from 'react-icons/fi'
import { heroHighlight } from '../constants'
import { div } from 'framer-motion/client'

const Hero = () => {
  return (
    <div style={{
            backgroundImage: `url(${hero7})`,
            height:'100vh',
            backgroundPosition: "center",
            backgroundSize: "cover", 
        }
        }
    >
        <div className='px-10 pt-40'>
            <h1 className='max-w-3xl text-5xl font-bold text-white sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight'>
                Go Digital With Us
            </h1>
            <button className='group relative mt-5 flex w-fit items-center h-10 gap-1.5 rounded-full px-10 border border-gray-400 backdrop-blur text-gray-50 transition-colors hover:backdrop-blur-2xl'>
                Choose Us
                <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </button>
            <div className='relative mt-30'>
                <div className='flex gap-1 max-lg:flex-wrap'>
                    <div className='w-1/4 rounded-4xl h-35 backdrop-blur-2xl border border-gray-400'>
                        <div className=' flex flex-col items-center'>
                            <img
                                src={tigerwebLogo}
                                width={100}
                                height={100}
                                alt=""
                                />
                            <h4 className='text-center text-2xl text-white'>Tigerweb Group</h4>
                        </div>
                    </div>
                    <div className='w-4xl rounded-4xl h-35 backdrop-blur-2xl border border-gray-400'>
                        <div className='relative flex gap-20 mt-9 items-center justify-center'>
                            {heroHighlight.map((item, index) => (
                                <div className='border border-white px-1 rounded-2xl backdrop-blur'>
                                    <div className='relative z-10 flex gap-0.5 items-baseline'>
                                        <p className='bg-gradient-to-br from-green-500 to-white bg-clip-text text-center text-6xl font-bold leading-tight text-transparent'>{item.number}</p>
                                        <h1 className='text-white text-2xl font-bold'>{item.title}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero