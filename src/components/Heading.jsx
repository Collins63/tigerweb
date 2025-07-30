import React from 'react'
import TagLine from './Tagline'

const Heading = ({className , title , text , tag}) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      {tag && <TagLine className="mb-4 text-gray-900  md:justify-center" >{tag}</TagLine>}
      {title && <h2 className="h2 text-4xl text-center text-gray-400">{title}</h2>}
      {text && <p className='body-2 mt-4 text-gray-400'>{text}</p>}
    </div>
  )
}

export default Heading