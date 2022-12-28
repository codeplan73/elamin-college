import React from 'react'
import heroBg from '../assets/hero.png'
import { Link } from 'react-router-dom'

const Hero = ({title, text}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 max-h-52 py-20 bg-hero text-slate-300">
        <h2 className='text-4xl font-bold capitalize'>{title} / <Link to='/'>Home</Link></h2>
        <p className='text-md '>{text}</p>
    </div>
  )
}

export default Hero