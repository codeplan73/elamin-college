import React from 'react'
import { useSelector } from 'react-redux'

const AdminTopNav = () => {
    const  {user: {user}} = useSelector((state) => state.auth)
  return (
    <nav className='w-full bg-gray-100 h-16 flex justify-end items-center md:px-6'>
        <p className='font-bold font-sm text-lg'>{user.name}</p>
    </nav>
  )
}

export default AdminTopNav