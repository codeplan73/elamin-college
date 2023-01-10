import React from 'react'
import {Link} from 'react-router-dom'
import { About, Contact, Homepage, Subject } from '../pages'
import Login from '../pages/user/Login'

const Sidebar = () => {
  const links = [
    {path:'/user-login', name:'Check Result', element: <Login />},
    {path:'/', name:'Home', element: <Homepage />},
    {path:'/about', name:'About', element: <About />},
    {path:'/contact', name:'Contact', element: <Contact />},
    {path:'/subject', name:'Subject', element: <Subject />},
    {path:'/news-&-event', name:'News & Event', element: <Event />},
  ]

  return (
    <nav  className='absolute md:hidden flex flex-col items-start justify-start bg-white drop-shadow-xl rounded left-0 w-full mt-0 z-20 transition-all duration-500 ease-in'>
      {links.map((link) => (
        <Link to={link.path} key={link.path} className='w-full hover:bg-teal-900 hover:animate-pulse hover:text-slate-100 pl-2 pr-4 py-3'>{link.name}</Link>
      ))}
       
    </nav>
  )
}

export default Sidebar