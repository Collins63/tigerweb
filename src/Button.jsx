import React from 'react'
import ButtonSvg from '../assets/svg/ButtonSvg'

export const Button = ({className , href , onCLick , children , px, white}) => {

  const classes  = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-gray-200 ${px || "px-7"} ${white ? "text-gray-900" : "text-white"} ${className || ""}`  
  const spanClasses = "relative z-10"

  const renderButton = () =>(
    <button className={classes} onClick={onCLick}>
        <span>{children}</span>
        {ButtonSvg(white)}
    </button>
  )

  const renderLink = () =>(
    <a href={href} className={classes}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
    </a>
  )

  return href ? renderLink() : renderButton();
}
