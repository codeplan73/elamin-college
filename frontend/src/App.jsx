import React, { useState } from 'react'
import 'tw-elements'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Routes, Route } from 'react-router-dom'
import { Homepage, About, Contact, Subject, Event, Table, Error } from './pages'
import { Login, Result, SchoolFees } from './pages/user/'
import { PrivateRoute } from './components/'
import { AdminLogin, Dashboard, Featured, Gallery, GeneralInfo, NewsEvent, StudentRecord, StudentResult } from './pages/admin/'

const App = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/subject" element={<Subject />} />
        <Route exact path="/news-&-event" element={<Event />} />
        <Route exact path="/user-login" element={<Login />} />
        <Route exact path="/admin-login" element={<AdminLogin />} />
        <Route exact path="/table" element={<Table />} />

        {/* protected routes */}
        <Route exact path="/user-school-fees" element={<SchoolFees />} />
        <Route exact path="/user-result" element={<Result />} />

        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/admin-featured" element={<Featured />} />
        <Route path="/admin-gallery" element={<Gallery />} />
        <Route path="/admin-generalinfo" element={<GeneralInfo />} />
        <Route path="/admin-new-event" element={<NewsEvent />} />
        {/* <Route path="/admin-student-records" element={<StudentRecord />} /> */}
        <Route path="/admin-student-result" element={<StudentResult />} />



        {/* <Route path="/admin-dashboard" element={<PrivateRoute />}>
        </Route> */}

        {/* end protected routes */}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App
