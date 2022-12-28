import React, {useState, useEffect, useRef} from 'react'
import { Slider, Team } from '../components/'
import { motion } from 'framer-motion'

import image1 from '../assets/images/feature1.jpeg'
import image2 from '../assets/images/feature2.jpeg'
import image3 from '../assets/images/feature3.jpeg'
import {MdSchool} from 'react-icons/md'
import {GiTeacher, GiCrystalGrowth} from 'react-icons/gi'
import {TbHeartHandshake} from 'react-icons/tb'
// import {GiCrystalGrowth} from 'react-icons/gr'
import images from './data'

const Homepage = () => {
  
  return (
    <main className="">
      <Slider />
      {/* about section */}

      <div className='bg-slate-100 py-20 flex flex-col items-center justify-between'>
        <h2 className="text-xl md:text-4xl font-bold text-gray-800 leading-relaxed capitalize text-center mb-1">
         Welcome to
        </h2>
        <h4 className='text-lg md:text-xl text-teal-800 font-bold capitalize'>College of modern sciences</h4>
        <hr className="border-teal-700 font-extrabold mx-auto w-60 my-4" />
        <p className="text-center w-11/12 md:w-3/5 text-slate-800">
          The Mission of <span>College of modern sciences</span> is to empower our children to achieve their greatest potential both as students and as members of their communities.
        </p>

        <div className='flex flex-col md:flex-row mt-8 w-full md:w-8/12 items-center justify-center gap-8 md:gap-20'>
          <div className='bg-slate-800 flex flex-col items-center justify-center rounded-full p-12 shadow-2xl'>
            <MdSchool className='text-2xl text-slate-50'/>
            <h4 className='text-sm font-bold text-slate-50 '>Enroll</h4>
          </div>
          <div className='bg-slate-800 flex flex-col items-center justify-center rounded-full p-12 shadow-2xl'>
            <GiTeacher className='text-2xl text-slate-50'/>
            <h4  className='text-sm font-bold text-slate-50 '>Teach</h4>
          </div>
          <div className='bg-slate-800 flex flex-col items-center justify-center rounded-full p-12 shadow-2xl'>
            <TbHeartHandshake className='text-2xl text-slate-50'/>
            <h4  className='text-sm font-bold text-slate-50 '>Support</h4>
          </div>
          <div className='bg-slate-800 flex flex-col items-center justify-center rounded-full p-12 shadow-2xl'>
            <GiCrystalGrowth className='text-2xl text-slate-50'/>
            <h4  className='text-sm font-bold text-slate-50 '>Grow</h4>
          </div>
        </div>

      </div>

      <div className="bg-white flex flex-col items-center justify-center gap-2 py-20 container max-w-6xl mx-auto pb-5">
        <h2 className="text-xl md:text-4xl font-bold text-gray-800 leading-relaxed capitalize text-center">
          We provide educational solution
        </h2>
        <hr className="border-teal-700 font-extrabold mx-auto w-60" />
        <p className="text-center w-11/12 md:w-3/5">
          As an international school we are proud to provide the highest
          possible standard of education to our students, enabling them to
          compete in an increasingly competitive global environment.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full my-16 px-8 md:px-4">
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="rounded-t-lg" src={image1} alt="" />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text- /xl font-medium mb-2">
                  Conducive Learning Environment
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  Our classrooms and study areas are very conducive for
                  learning.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="rounded-t-lg" src={image2} alt="" />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text- /xl font-medium mb-2">
                  Well taught subjects
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  Our curriculum offers both Western & Arabic Subjects
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="rounded-t-lg" src={image3} alt="" />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text- /xl font-medium mb-2">
                  Hostel Life
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  Our boys' and girls' hostels are very safe, neat and
                  well-ventilated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end about section */}

      <div className="bg-slate-100 pb-12">
        <h2 className="text-2xl text-gray-800 text-center pt-16 pb-2">Gallery</h2>
            <hr className="border-teal-700 font-extrabold mx-auto w-60" />
        <div className="overflow-hidden text-gray-700 ">
          <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
            <div className="flex flex-col md:flex-row flex-wrap px-8 md:px-0 gap-4 md:gap-0">
              <div className="flex flex-wrap w-full md:w-1/3">
                <div className="w-full  p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-full md:w-1/3">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-full md:w-1/3">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-full md:w-1/3">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-full md:w-1/3">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-full md:w-1/3">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div>
        <motion.div className='carousel'>
          <motion.div className='inner-carousel'>
            {images.map(image => {
              return (
                <motion.div>
                  <img src={image} alt=''  className='h-32'/>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
      {/* <Team /> */}
    </main>
  )
}

export default Homepage
