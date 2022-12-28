import React, {useState} from 'react'
import 'tw-elements';
import { Routes, Route } from 'react-router-dom'
import { Header, Footer } from './components/'
import {Homepage, About, Contact, Subject, Event, Error} from './pages'
import Login from './pages/account/Login'
import Dashboard from './pages/account/Dashboard'
import Result from './pages/account/Result'

const App = () => {
   const [open, setOpen] = useState(false)
  return (
    <>
    <Header/> 
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='about' element={<About />} /> 
      <Route path='contact' element={<Contact />} /> 
      <Route path='subject' element={<Subject />} /> 
      <Route path='news-&-event' element={<Event />} /> 
      <Route path='login' element={<Login />} /> 
      <Route exact path='account/dashboard' element={<Dashboard />} /> 
      <Route exact path='account/result' element={<Result />} /> 
      <Route path="*" element={<Error />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App