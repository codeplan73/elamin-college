import React from 'react'
import { Hero } from '../components'
import { Link } from 'react-router-dom'

const Event = () => {
  return (
    <>
      <Hero title="News & Event" text="Updates and bulletine" />

      <div className="bg-white flex flex-col items-center justify-center gap-2 py-20 container max-w-7xl mx-auto pb-5 px-4 md:px-20">
        <div className="flex flex-col items-center gap-1 mb-8">
          <p className="text-xs font-bold text-gray-400">Update</p>
          <h2 className="text-3xl font-bold mb-2">
            News & <span className="text-teal-600">Event</span>
          </h2>
          <hr className="border-teal-700 font-extrabold mx-auto w-60" />
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8 flex-wrap">
          <div className="block rounded-lg shadow-lg bg-white max-w-sm md:max-w-md text-center">
            <div className="py-3 px-6 border-b border-gray-300">Featured</div>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Special title treatment
              </h5>
              <p className="text-gray-700 text-base mb-4">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link
                type="button"
                className=" inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out"
                to='#'
              >
                Read More...
              </Link>
            </div>
            <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
              2 days ago
            </div>
          </div>
          <div className="block rounded-lg shadow-lg bg-white max-w-sm md:max-w-md text-center">
            <div className="py-3 px-6 border-b border-gray-300">Featured</div>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Special title treatment
              </h5>
              <p className="text-gray-700 text-base mb-4">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link
                type="button"
                className=" inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out"
                to='#'
              >
                Read More...
              </Link>
            </div>
            <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
              2 days ago
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Event
