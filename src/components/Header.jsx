import React from 'react'
import {navigation} from '../constants/index.js'
import { a } from 'framer-motion/client'

const Header = () => {
  return (
    <div className="flex fixed h-15 w-1/2 left-1/2 -translate-x-1/2 z-50 rounded-2xl backdrop-blur-2xl border border-blue-400  items-center justify-center shadow-[0_4px_20px_rgba(96,165,250,0.4)]">      
            <nav className="fixed h-20 flex items-center justify-center lg:bg-transparent">
                <div className=" relative z-10 flex items-center justify-center m-auto lg:flex-row">
                    {navigation.map((item) =>(
                        <a 
                            href={item.url}
                            key={item.id}
                            className={`block drop-shadow-[2px_2px_4px_rgba(0,0,0,0.1)] relative text-6xl font-medium text-white  uppercase transition-colors hover:text-blue-400 px-6 py-6 md:py-8 lg:mr-2 lg:text-xs lg:font-semibold`}
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
            </nav>
        
    </div>

  )
}

export default Header