import React from 'react'
import { choose, curve1, curve2, hands, lines } from '../assets'
import { chooseUsBottomTag, chooseUsTags, chooseUsText } from '../constants'
import { div } from 'framer-motion/client'

const WhyUs = () => {
  return (
    <div className='px-10 grid grid-cols-2 mb-30 '>
        <div
            className='flex flex-col'
        >
            <h1 className=' text-7xl mt-20 font-medium bg-gradient-to-br from-blue-950 to-green-300 bg-clip-text leading-tight text-transparent'>Reasons..</h1>
            <h2 className='mt-10 text-4xl'>Why should reach out to</h2>
            <h2 className=' text-4xl '>"US"</h2>
            <p className='text-md mt-5 text-gray-600'>{chooseUsText}</p>
            <div className='flex gap-1.5'>
                <div className='w-80 mt-30 h-15 rounded-xl bg-gradient-to-br from-blue-950 to-green-300 flex items-center justify-center'>
                    <h1 className='text-white z-10 text-2xl font-bold'>Boosters!!</h1>
                    <img src={curve1} width={150} height={100} alt="Curve 1" className='z-0 absolute filter invert-90 sepia-10 saturate-100 hue-rotate-100' />
                    <img src={curve1} width={150} height={100} alt="Curve 1" className='z-0 absolute rotate-40 filter invert-90 sepia-10 saturate-100 hue-rotate-100' />
                </div>
                <div className="">
                    <img src={curve1} width={420} height={100} alt="Curve 1" className='z-0 absolute filter invert-90 sepia-10 saturate-100 hue-rotate-100' />
                </div> 
            </div>
        </div>
        <div className='relative z-10 mt-20 h-150 rounded-2xl'
            style={{
                backgroundImage:`url(${hands})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className='grid grid-cols-3 gap-5 p-10'>
                {chooseUsTags.map((item, index) => (
                    <div key={index} className='flex gap-1.5 flex-col items-center justify-center p-5 border border-white rounded-2xl backdrop-blur-2xl'>
                        <img src={item.icon} alt={item.title} className='w-20 h-20 mb-3' />
                        <h3 className='text-xl text-white text-center font-medium'>{item.title}</h3>
                    </div>
                ))}
            </div>
            <div className='px-10 mt-40'>
                {chooseUsBottomTag.map((item, index)=> (
                    <div key={index} className='flex flex-col items-center border border-gray-400 py-5 backdrop-blur rounded-4xl'>
                        <img src={item.icon} className='w-20 h-20' alt="" />
                        <h3 className='text-xl text-white text-center font-medium'>{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default WhyUs