import React from 'react'
import { BsFillTelephoneInboundFill } from 'react-icons/bs'
import { AiTwotoneMail } from 'react-icons/ai'
import { MdLocationCity } from 'react-icons/md'
import { FcGlobe } from 'react-icons/fc'


const Footer = () => {
  return (
    <footer className="bg-slate-800 flex flex-col items-center gap-3 text-white py-10 w-full px-2">
      <h4 className='text-center capitalize text-slate-400 text-xl'>College of modern sciences</h4>

      <p className='flex gap-3 items-center text-sm text-slate-400 text-center'><MdLocationCity className="text-teal-400 text-md text-start "/>No. 5 Darus-Salam Aviele - Ubiane Estako West L.G.A. Edo State, Nigeria</p>

      
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-5 text-slate-400 flex-wrap w-full md:w-auto text-sm">
        <div className="flex items-start justify-between">
          <BsFillTelephoneInboundFill className="text-teal-500 text-sm" />
          <span className="text-center">Phone: +2349065969235, +2348036398734</span>
        </div>
        <div className="flex items-center justify-between">
          <AiTwotoneMail className="text-teal-500 text-sm" />
          <span>Email: al-amin2022@gmail.com</span>
        </div>
        <div className="flex items-center justify-between">
          <FcGlobe className="text-teal-500 text-sm mr-2" />
          <span>Web: www.alamin2022.com</span>
        </div>

      </div>
    </footer>
  )
}

export default Footer
