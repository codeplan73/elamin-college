import React from 'react'
import { Link } from 'react-router-dom'
import {RxDashboard} from 'react-icons/rx'
import { GiNewspaper} from 'react-icons/gi'
import {GrGallery, GrCertificate} from 'react-icons/gr'
import {BsInfoCircle} from 'react-icons/bs'
import {SlLogout} from 'react-icons/sl'
import {AiOutlineTeam} from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const links = [
  {id:1, path:'/admin-dashboard', pathName:'Dashboard', icon:<RxDashboard />},
  {id:2, path:'/admin-student-result', pathName:'Result', icon: <GrCertificate />},
  {id:3, path:'/admin-gallery', pathName:'Gallery', icon: <GrGallery />},
  {id:4, path:'/admin-generalinfo', pathName:'GeneralInfo', icon: <BsInfoCircle />},
  {id:5, path:'/admin-new-event', pathName:'News & Event', icon: <GiNewspaper />},
  {id:6, path:'/admin-featured', pathName:'Featured', icon: <AiOutlineTeam /> },
]

const AdminNav = () => {
  const  {user: {user}} = useSelector((state) => state.auth)
  const navigate = useNavigate()
  if(!user){
    navigate('./amdin-login')
  }
  return (
      <nav className='bg-slate-800 max-h-max text-gray-200 p-2 md:p-2 md:w-2/12 flex flex-col '>
        <h4 className='text-center font-bold md:text-2xl text-slate-400 my-3'>SMS</h4>
        <p className='text-sm text-center text-slate-400 mb-8'>Welcome {user.name}</p>

        {
          links.map((link) => (
            <div className='flex justify-start items-center gap-4 border border-r-teal-700 border-l-0 border-t-0 border-b-0 my-2 hover:bg-slate-900 p-2 rounded shadow focus:bg-teal-900 active:bg-slate-500' key={link.id}>
              <span className='bg-gray-400 text-slate-700 font-bold text-xl p-1 drop-shadow rounded-xl'>{link.icon}</span>
              <Link to={link.path}>{link.pathName}</Link>
            </div>
          ))
        }

        <button className='self-start mx-2 mt-4 bg-slate-700 hover:bg-slate-900 w-40 p-2 rounded-lg shadow-lg flex gap-4 items-center'><SlLogout />  Logout</button>
      </nav>

  )
}

export default AdminNav