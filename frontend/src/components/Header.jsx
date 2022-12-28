import React, {useState} from 'react'
import logo from './../assets/logo.png'
import {Link} from 'react-router-dom'
import {AiFillLock} from 'react-icons/ai'
import {CgLogOut} from 'react-icons/cg'
import {HiMenu} from 'react-icons/hi'
import {MdMenuOpen} from 'react-icons/md'
import { Sidebar} from './'


const Header = () => {
  const [open, setOpen] = useState(false)

  const user = false

  const handleClick =()=> {
    setOpen(!open)
  }

  return (
      
    <>
    <nav className='w-full bg-white flex justify-between items-center my-1 drop-shadow-2xl mx-auto px-2 py-1 md:px-20 relative top-0 z-10 '>
       <div className='md:hidden'>
        {open?
          <MdMenuOpen className='text-2xl mr-4 z-30 cursor-pointer' onClick={handleClick}/>
          :
          <HiMenu className='text-2xl mr-4 z-30 cursor-pointer' onClick={handleClick}/>
        }
       </div>

        <h4 className='md:hidden uppercase text-xs md:text-md font-serif font-bold self-center'>EL-AMIN <span className='text-green-700'> {' '}college {' '}</span>of mordern sciences</h4>
        
        <ul className='hidden md:flex justify-start items-center gap-5 py-3 text-gray-700 font-helvatical text-sm'>
          {
            user ? 
            <>
              <Link className='bg-gradient-to-r from-red-500 text- to-red-800  font-semibold text-sm  font-mono rounded-full shadow flex items-center gap-2 py-2 px-6 drop-shadow-xl text-white' to='login'><CgLogOut className='' />Logout</Link>
            <Link className='bg-gradient-to-r from-red-500 text- to-red-800  font-semibold text-sm  font-mono rounded-full shadow flex items-center gap-2 py-2 px-6 drop-shadow-xl text-white' to='account/result'><CgLogOut className='' />Check Result</Link>
            </>
            :
            <Link className='bg-gradient-to-r from-red-500 text- to-red-800  font-semibold text-sm  font-mono rounded-full shadow flex items-center gap-2 py-2 px-6 drop-shadow-xl text-white' to='login'><AiFillLock className='' />Check Result</Link>
          }
          
          <Link className='hover:text-red-900 font-bold font-sans' to='/'>Home</Link>
          <Link className='hover:text-red-900 font-bold font-sans' to='subject'>Subject</Link>
          <Link className='hover:text-red-900 font-bold font-sans' to='news-&-event'>News & Event</Link>
          <Link className='hover:text-red-900 font-bold font-sans' to='about'>About</Link>
          <Link className='hover:text-red-900 font-bold font-sans' to='contact'>Contact</Link>
        </ul>

        <ul>
         <img src={logo} className='ml-2' height={40} width={40} alt="hira college logo" />
        </ul>

        
      </nav>
      {open && <Sidebar open={open} setOpen={setOpen} handleClick={handleClick}/>}
      </>
  )
}

export default Header