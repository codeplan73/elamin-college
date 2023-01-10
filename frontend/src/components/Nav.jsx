import React, { useState } from 'react'
import logo from './../assets/logo.png'
import { Link } from 'react-router-dom'
import { AiFillLock } from 'react-icons/ai'
import { CgLogOut } from 'react-icons/cg'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { HiMenu } from 'react-icons/hi'
import { MdMenuOpen } from 'react-icons/md'
import { Sidebar } from '.'
import { About, Contact, Homepage, Subject } from '../pages'
import Login from '../pages/user/Login'


const Header = () => {
  const [open, setOpen] = useState(false)

  const user = false

  const handleClick = () => {
    setOpen(!open)
  }

  const links = [
    {path:'/user-login', name:'Check Result', element: <Login />},
    {path:'/', name:'Home', element: <Homepage />},
    {path:'/about', name:'About', element: <About />},
    {path:'/contact', name:'Contact', element: <Contact />},
    {path:'/subject', name:'Subject', element: <Subject />},
    {path:'/news-&-event', name:'News & Event', element: <Event />},
  ]

  return (
    <>
      <nav className="w-full bg-white flex justify-between items-center my-1 drop-shadow-2xl mx-auto px-2 py-1 md:px-20 relative top-0 z-10 ">
        <div className="md:hidden">
          {open ? (
            <MdMenuOpen
              className="text-2xl mr-4 z-30 cursor-pointer"
              onClick={handleClick}
            />
          ) : (
            <HiMenu
              className="text-2xl mr-4 z-30 cursor-pointer"
              onClick={handleClick}
            />
          )}
        </div>

        <h4 className="md:hidden uppercase text-xs md:text-md font-serif font-bold self-center">
          EL-AMIN <span className="text-green-700"> college </span>of mordern
          sciences
        </h4>

        <ul className="hidden md:flex justify-start items-center gap-5 py-3 text-gray-700 font-helvatical text-sm">
          {
            links.map((link) => (
              <Link key={link.name} className={link.path =='/user-login'? "bg-gradient-to-r from-red-500 text- to-red-800  font-semibold text-sm  font-mono rounded-full shadow flex items-center gap-2 py-2 px-6 drop-shadow-xl text-white" : "hover:text-red-900 font-bold font-sans"} to={link.path}>
                {link.name}
            </Link>
            ))
          }     
        </ul>
        <ul className='flex items-center justify-center'>
          <Link className="hover:text-red-900 font-bold font-sans flex items-center justify-center gap-1" to="/admin-login">
             <BsFillShieldLockFill className='' /> Admin
          </Link>
          <img
            src={logo}
            className="ml-2"
            height={40}
            width={40}
            alt="hira college logo"
          />
        </ul>
      </nav>
      {open && (
        <Sidebar open={open} setOpen={setOpen} handleClick={handleClick} />
      )}
    </>
  )
}

export default Header
