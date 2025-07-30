import React from 'react'
import { motion } from 'framer-motion'
import { FiAlertCircle, FiArrowRight, FiArrowRightCircle, FiChevronRight, FiMapPin, FiPlay ,FiPhone, FiCode} from 'react-icons/fi'
import { FiMenu } from 'react-icons/fi'
import { services, services2 } from '../constants'

const gridContainerVarients ={
  hidden:{opacity:0},
  show:{
    opacity:1,
    transition:{
      staggerChildren: 0.25,
    }
  }
}

const gridSquareVarients = {
  hidden:{opacity:0},
  show:{opacity:1}
}


const Products = () => {
  return (
    <div>
        <div className='h-15 rounded-2xl border-blue-400  items-center shadow-[0_4px_20px_rgba(96,165,250,0.4)] translate-x-1/2 bg-white w-1/2'>
          <p className='text-center pt-5 text-2xl font-bold bg-gradient-to-br from-blue-800 to-white bg-clip-text leading-tight text-[#041E42]'>Products</p>
        </div>

        <div className='bg-white shadow-2xl w-full mt-20 rounded-2xl h-100'>
          <div className='flex flex-col overflow-x-hidden gap-10'>
            <motion.section 
              className='grid grid-cols-3 p-10 gap-10'
              variants={gridContainerVarients}
              initial="hidden"
              animate="show"
            >
              {services.map((item)=> (
                <motion.div variants={gridSquareVarients} className="relative w-[320px] h-[320px] bg-gradient-to-br from-[#041E42] to-[#89F9E8] text-white rounded-[2rem] overflow-hidden ">
                  <div className='bg-transparent rounded-full mt-50 ml-70  w-10 h-10 shadow-[1rem_1.1rem_0.1rem_rgba(255,255,255,1)]'/>
                  <h2 className='text-3xl p-5 -mt-50 font-bold'>{item.title}</h2>
                  <div className='absolute top-0 mt-60 rounded-tl-3xl left-55 w-30 h-20 flex bg-white items-center justify-center'>
                    <button className='w-17 h-17 items-center justify-center group rounded-full  -ml-5 bg-gradient-to-br from-[#89F9E8]  to-[#041E42]'>
                      <FiArrowRight className='h-5 w-10  ml-3 -mt-1.5' />
                    </button>
                    
                  </div>
                  <div className='absolute top-0 mt-70 ml-45 rounded-full w-10 h-10 flex bg-transparent shadow-[1rem_1.1rem_0.1rem_rgba(255,255,255,1)]'/>
                  <FiCode className='h-25 w-30 p-5' />

                </motion.div>
              ))}
              
             
            </motion.section>
          </div>
        </div>
    </div>
  )
}

export default Products
