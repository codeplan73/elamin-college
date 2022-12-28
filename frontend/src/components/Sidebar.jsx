import React from 'react'
import {Link} from 'react-router-dom'

const Sidebar = () => {

  return (
    <nav  className='absolute md:hidden flex flex-col items-start justify-start bg-white drop-shadow-xl rounded left-0 w-full mt-0 z-20 transition-all duration-500 ease-in'>
        <Link to='/' className='w-full hover:bg-teal-900 hover:animate-pulse hover:text-slate-100 pl-2 pr-4 py-3'>Home</Link>
        <Link to='about' className='w-full hover:bg-teal-900 hover:animate-pulse hover:text-slate-100 pl-2 pr-4 py-3'>About</Link>
        <Link to='contact' className='w-full hover:bg-teal-900 hover:animate-pulse hover:text-slate-100 pl-2 pr-4 py-3'>Contact</Link>
        <Link to='subject' className='w-full hover:bg-teal-900 hover:animate-pulse hover:text-slate-100 pl-2 pr-4 py-3'>Subject</Link>
        <Link to='news-&-event' className='w-full hover:bg-teal-900 hover:animate-pulse hover:text-slate-100 pl-2 pr-4 py-3'>News & Event</Link>
        <Link to='login' className=' w-full hover:bg-teal-900 hover:animate-pulse hover:text-slate-100 pl-2 pr-4 py-3'>Check Result</Link>
    </nav>
  )
}

export default Sidebar