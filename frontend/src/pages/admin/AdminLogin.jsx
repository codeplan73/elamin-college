import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { Textbox } from '../../components/index'
import { RiAdminFill, RiArrowGoBackLine } from 'react-icons/ri'
import { AiFillUnlock } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { login, reset } from '../../redux/feature/adminAuth/authSlice'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, loading, error, success, message } = useSelector(
    (state) => state.auth
  )

  

  useEffect(() => {
    if(error){
      toast.error(message)
    }

    if (success || user) {
      navigate('/admin-dashboard')
    }

    dispatch(reset)
  }, [error, success, message, dispatch, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      toast.error('All fields are required')
      return
    }

    dispatch(login({ email, password }))
    clearText()
  }

  const clearText = () => {
    setEmail('')
    setPassword('')
  }

  return (
    <main className="w-full flex flex-col items-center justify-center mx-auto py-28 bg-slate-50 px-8 h-screen text-center">
      <div className="w-full md:w-4/12 lg:w-4/12 items-center justify-center md:mx-auto bg-white shadow-2xl p-4 rounded-xl">
        <h4 className="text-lg md:text-2xl font-body text-center my-4 flex justify-center items-center gap-4 text-teal-800">
          <RiAdminFill className="" />
          Admin Login
        </h4>
        <hr className="border-teal-700 font-extrabold mx-auto w-60 h-sc my-4" />
        <form onSubmit={handleSubmit}>
          <Textbox
            type="text"
            name={email}
            autocomplete="on"
            value={email}
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Textbox
            type="password"
            name={password}
            autocomplete="off"
            value={password}
            label="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-between items-center">
            <button className="bg-teal-700 hover:bg-teal-900 rounded p-2 text-white font-semibold ml-2 px-5 flex items-center justify-start gap-2">
              <AiFillUnlock /> Login{' '}
            </button>

            <Link
              to="/"
              className="text-sm font-bold text-gray-400 outline-stone-900 flex items-center gap-2"
            >
              <RiArrowGoBackLine className="text-md text-red-800" /> Go Back
              Home
            </Link>
          </div>
        </form>
      </div>

      <hr className="border-teal-700 font-extrabold mx-auto w-60 mt-12" />
      <h4 className="text-gray-500 text-xl mt-6 font-bold">
        <span className="text-green-800">Elamin Modern </span>College of
        Sciences
      </h4>
      <p className="text-gray-500 text-sm mt-2">
        All right reserved &copy; 2022 - {new Date().getFullYear()}
      </p>
    </main>
  )
}

export default Login
