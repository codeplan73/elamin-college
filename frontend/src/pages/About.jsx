import React from 'react'
import {Hero} from '../components/'

const About = () => {
  return (
    <div>
      <Hero title='About Us' text='About page information'/>
      {/* Mission statement */}
      <div className='bg-white flex flex-col pt-16 px-8 md:px-20 gap-4 text-justify pb-8'>
        <h2 className="text-lg md:text-4xl font-bold text-gray-800 leading-relaxed capitalize text-center my-2"> ESTABLISHMENT OF HIRA COMPREHENSIVE SCHOOLS</h2>

        <p>All the praises are surely due to Allah, the Lord of the Universe and all that exists. May the peace and blessings of Allah be upon our Holy Prophet Muhammad, his family, his companions and all Muslims who follow them in faith and piety until the Day of Judgment.</p>

        <p>
            The idea of HIRA Comprehensive Schools was founded in 2002 with the goal of providing educational opportunities to the Muslim youths of Primary and Secondary School age in Nigeria.
        </p>

        <p>
          Admission into the school is open to all Muslim youths who fulfill the prerequisites and agree to abide by the code of conducts adopted by the school administration without prejudice of race, caste, origin or tribe.
        </p>

        <p>
          The focus of the school will be, among other things, to raise awareness among the students and the Nigerian societies about the need for promoting basic Islamic education that goes hand in hand with the secular education and with the following aims and objectives in mind:
        </p>

        <p>
          <li>
             Build moral oriented education;
          </li>
          <li>
            Prepare a cadre of educated, practical, and morally upright generation through relevant 
          </li>

          <li>education and training;</li>
          <li>Support the economically and the socially challenged;</li>
          <li>Break the dichotomy that exists between religious and secular studies;</li>
          <li>Help transition to universities, colleges and or other vocational institutes after secondary education through education, motivation and necessary assistance.</li>
        </p>

        <h4 className='font-bold underline'>
          OUR BRANCHES:
        </h4>

        <li>
          Hira Comprehensive College situated at Iyakpi, South Ibie of Edo State, Nigeria.
        </li>
        <li>
          Hira Comprehensive College situated at Ogbido, Jettu Uzairue of Edo State, Nigeria.
        </li>
        <li>
          Hira Comprehensive College situated at Felele, off Sarki-Noma of Kogi State, Nigeria
        </li>
      </div>


  <div className="bg-gray-100 flex flex-col pt-16 px-8 md:px-20 gap-4">
        <h2 className="text-xl md:text-4xl font-bold text-gray-800 leading-relaxed capitalize text-center my-2">
          Mission Statement
        </h2>
        <hr className="border-teal-700 font-extrabold mx-auto w-60 mb-4" />
        <p className="text-justify mb-2">
          The overall goal of the schools is to groom students with a high
          Islamic spirit and strong mind frame to enable them properly define
          their roles and their obligations towards their society academically,
          morally and financially. The intent is to broaden the students’
          appreciation for and interest in Islamic studies while also
          strengthening them technically well enough to face the contemporary
          challenges of industrial world. While bringing students together for
          such objectives, the school will also play an important role in
          building Islamic literate communities that will extend beyond its
          vicinity.
        </p>
        <p className="text-justify mb-2">
          HIRA is, thus, one of the few of these institutions in the country
          that is striving to teach education, character, and religion in a most
          homogenous way possible, adopting an organized and professional
          fashion.
        </p>
        <p className="text-justify mb-2">
          Allah, the Almighty, explicitly declared in the Holy Qura’n that He is
          not going to change the conditions of the people until and unless
          those people change that which is within themselves. In line with the
          implications of this declaration, HIRA has made its core educational
          policies around inculcating essential character values in its
          students. These values are summarized as follows:
        </p>

        <div className="flex flex-col text-justify">
          <li>
            <b>PERSONAL RESPONSIBILITY – </b>Being accountable for one’s
            motives, attitudes, and actions
          </li>
          <li>
            <b>INTEGRITY –</b> Demonstrating trustworthiness by doing what is
            right and saying what is true.
          </li>
          <li>
            <b>CONVICTION –</b> Holding a value or belief so firmly that it
            influences one’s attitudes or actions
          </li>
          <li>
            <b>SELF-DISCIPLINE – </b>Focusing on worthy goals instead of
            distractions
          </li>
          <b>DILIGENCE –</b> Willingly completing the tasks one has accepted
          <li>
            <b>WISDOM –</b>Behaving in ways that show that a student understands
            the consequences of his decisions.
          </li>
          <li>
            <b>INTERPERSONAL Respect –</b> Treating others as one wants to be
            treated.
          </li>
          <li>
            <b>LOYALTY –</b> Faithfully obeying installed authorities and
            committing to significant relationships.
          </li>
          <li>
            <b>COURAGE –</b> Conquering fear in order to assist others.
          </li>
          <li>
            <b>HUMILITY –</b> Honoring others by drawing atten
          </li>
        </div>
      </div>
      {/* End Mission statement */}.
    </div>
  )
}

export default About
