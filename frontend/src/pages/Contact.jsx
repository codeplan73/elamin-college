import React, {useState} from 'react'
import {Hero} from '../components/'
import { BsFillTelephoneInboundFill } from 'react-icons/bs'
import { AiTwotoneMail } from 'react-icons/ai'
import { MdLocationCity } from 'react-icons/md'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit =(e)=> {
    e.preventDefault()
    console.log(name, email, subject, message)
  }
  return (
    <>
    <Hero title='Contact Us' text=''/>
  
      <div className="bg-white flex flex-col items-center justify-center gap-2 py-20 container max-w-7xl mx-auto pb-5">

        {/* map section */}
        <div className='flex flex-col items-center gap-1 mb-8'>
          <p className='text-xs font-bold text-gray-400'>CONTACT</p>
          <h2 className='text-3xl font-bold mb-2'>Need Help? <span className='text-teal-600'>Contact Us</span></h2>
          <hr className="border-teal-700 font-extrabold mx-auto w-60" />
        </div>

        <div className='flex flex-col md:flex-row justify-between gap-8 w-full px-4 md:px-20'>
          {/* contact details */}
          <div className='flex flex-col gap-6 w-full md:w-5/12'>
            <div className='flex items-center justify-start gap-3 bg-slate-200 w-full rounded px-2 drop-shadow-lg py-6'>
              <AiTwotoneMail className='text-4xl text-slate-50 bg-slate-800 p-2 rounded-full' />
              <div className='text-sm'>
                <h4 className='font-bold'>Email Us</h4>
                <p>al-amin2022@gmail.com</p>
              </div>
            </div>
            <div className='flex items-center justify-start gap-3 bg-slate-200 w-full rounded px-2 drop-shadow-lg py-6'>
              <BsFillTelephoneInboundFill className='text-4xl text-slate-50 bg-slate-800 p-2 rounded-full' />
              <div className='text-sm'>
                <h4 className='font-bold'>Call Us</h4>
                <p>+2349065969235, +2348036398734</p>
              </div>
            </div>
            <div className='flex items-center justify-start gap-3 bg-slate-200 w-full rounded px-2 drop-shadow-lg py-6'>
              <MdLocationCity className='text-4xl text-slate-50 bg-slate-800 p-2 rounded-full' />
              <div className='text-sm'>
                <h4 className='font-bold'>Locate Us</h4>
                <p>No. 5 Darus-Salam Aviele - Ubiane Estako West L.G.A. Edo State, Nigeria</p>
              </div>
            </div>
          </div>
          {/* contact form */}
          <div className='flex flex-col w-full md:w-7/12'> 
            <form onSubmit={handleSubmit} className='p-4 bg-slate-50 rounded shadow-md'>
              <div className='flex flex-col md:flex-row items-center justify-start gap-8 mb-8'>
                <input required type="text" value={name} onChange={(e => setName(e.target.value))} placeholder='Enter Name' className='font-normal p-3 text-gray-900 border-slate-300 border-solid outline-1 w-full md:w-6/12 rounded'/>
                <input required type="email" value={email} onChange={(e => setEmail(e.target.value))} placeholder='Enter Email' className='font-normal p-3 text-gray-900 border-slate-300 border-solid outline-1 w-full md:w-6/12 rounded'/>
              </div>
              <input required type="text" value={subject} onChange={(e => setSubject(e.target.value))} placeholder='Enter Subject' className='font-normal p-3 text-gray-900 border-slate-300 border-solid outline-1 w-full rounded mb-8'/>

              <textarea required cols="30" value={message} rows="5" onChange={(e => setMessage(e.target.value))} className='font-normal p-3 text-gray-900 border-slate-300 border-solid outline-1 w-full rounded mb-8'></textarea>

              <button type="submit" className="mb-2 w-full inline-block px-6 py-2.5 bg-slate-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:teal-blue-800 active:shadow-lg transition duration-150 ease-in-out">Send Mail</button>
            </form>
          </div>
        </div>
      </div>    
    </>
  )
}

export default Contact