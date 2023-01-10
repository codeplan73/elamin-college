import React from 'react'
import { Hero, SubjectItem } from '../components'
import { Nav, Footer } from '../components/'

const Subject = () => {
  return (
    <>
    <Nav />
      <Hero
        title="Subject"
        text="This section contains all the subject offered."
      />
      <div className="bg-white flex flex-col items-center justify-center gap-2 py-20 container max-w-7xl mx-auto pb-5 px-4 md:px-20">
        <div className="flex flex-col items-center gap-1 mb-8">
          <p className="text-xs font-bold text-gray-400">Subject</p>
          <h2 className="text-3xl font-bold mb-2">
            Subject <span className="text-teal-600">Offered</span>
          </h2>
          <hr className="border-teal-700 font-extrabold mx-auto w-60" />
        </div>

        <div className="flex flex-col items-center gap-3 px-8 md:-px-20">
          <p className="text-center  mb-4">
            All the praises are surely due to Allah, the Lord of the Universe
            and all that exists. May the peace and blessings of Allah be upon
            our Holy Prophet Muhammad, his family, his companions and all
            Muslims who follow them in faith and piety until the Day of
            Judgment.
          </p>
          <SubjectItem section='Nursery Subjects' />
          <SubjectItem section='Lower Primary Subjects' />
          <SubjectItem section='Upper Primary Subjects' />
          <SubjectItem section='Junior Secondary Subjects' />
          <SubjectItem section='Senior Secondary Subjects' />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Subject
