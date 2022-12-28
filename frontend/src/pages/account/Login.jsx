import React,{useState} from 'react'
import logo from '../../assets/logo.png'

const Login = () => {
    const loginHandler =(e)=>{
        e.preventDefault()
    }

  return ( 
    <form onSubmit={loginHandler} className='w-full md:w-6/12 flex flex-col gap-5 items-center justify-center px-12 md:mx-auto my-20'>
        <img src={logo} className='h-20' alt="" />
        <h4>Please Enter your credentials</h4>
        <input required type="text" onChange={(e) => {}} placeholder='Enter Your Student ID' className='font-normal p-3 text-gray-900 border-slate-300 border-solid outline-1 w-full md:w-6/12 rounded'/>

        <input required type="text" onChange={(e) => {}} placeholder='Enter Your PIN' className='font-normal p-3 text-gray-900 border-slate-300 border-solid outline-1 w-full md:w-6/12 rounded'/>

        <select className='font-normal p-3 text-gray-900 border-slate-300 border-solid outline-1 w-full md:w-6/12 rounded'>
            <option>Select Class</option>
            <option value='pre-kg'>Pre KG</option>
            <option value='kg1'>KG1</option>
            <option value='kg2'>KG2</option>
            <option value='kg3'>KG3</option>
            <option value='pry1'>Pry1</option>
            <option value='pry2'>Pry2</option>
            <option value='pry3'>Pry3</option>
            <option value='pry4'>Pry4</option>
            <option value='pry5'>Pry5</option>
            <option value='pry6'>Pry6</option>
            <option value='jss1'>JSS1</option>
            <option value='jss2'>JSS2</option>
            <option value='jss3'>JSS3</option>
            <option value='ss1'>SS1</option>
            <option value='ss2'>SS2</option>
            <option value='ss3'>SS3</option>
        </select>
        <button className="bg-cyan-800 rounded p-2 text-white font-semibold w-full md:w-6/12">Proceed</button>
    </form>
  )
}

export default Login