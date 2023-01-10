import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const SchoolFees = () => {
  return (
    <div className="flex flex-col md:w-max-6xl md:px-20 py-8 md:gap-8">
      <div className="flex items-center justify-between gap-4 px-4">
        <img src={logo} className="h-10 md:h-20" alt="school logo" />
        <h4 className="uppercase text-center text-md md:text-3xl font-serif font-bold self-center">
          EL-AMIN <span className="text-green-700"> college </span>of mordern
          sciences
        </h4>
        <img src={logo} className="h-10 md:h-20" alt="school logo" />
      </div>

      <section className="px-8 mt-4 mb-2">
        <div className="border rounded-lg border-l-teal-600 border-r-teal-600 border-t-teal-600 border-b-teal-600 flex justify-start flex-wrap text-xs md:text-sm text-truncate">
          <p className="border border-solid border-r-slate-800 border-l-slate-800 p-2 text-center w-full flex items-center justify-center flex-1 gap-2 font-bold">
            <span>Adm No:</span>
            <span>1064</span>
          </p>
          <p className="border border-solid border-r-slate-800 border-l-slate-800 p-2 text-center w-full flex items-center justify-center flex-1 gap-2 font-bold">
            <span>Fullname:</span>
            <span>Emmanuel Omonzebaguan</span>
          </p>
          <p className="border border-solid border-r-slate-800 border-l-slate-800 p-2 text-center w-full flex items-center justify-center flex-1 gap-2 font-bold">
            <span>Section:</span>
            <span>Seconday</span>
          </p>
          <p className="border border-solid border-r-slate-800 border-l-slate-800 p-2 text-center w-full flex items-center justify-center flex-1 gap-2 font-bold">
            <span>CLass:</span>
            <span>SS3</span>
          </p>
          <p className="border border-solid border-r-slate-800 border-l-slate-800 p-2 text-center w-full flex items-center justify-center flex-1 gap-2 font-bold">
            <span>Gender:</span>
            <span>Female</span>
          </p>
        </div>
      </section>

      <section className="px-8 mb-8 flex flex-col items-start md:flex-row gap-8 md:gap-0">
        <div className="flex flex-col w-full md:w-6/12">
          <p className="border border-solid border-r-slate-800 border-l-slate-800 w-full flex items-center justify-between flex-1 gap-2 font-md">
            <span className="text-sm md:text-md text-left border border-solid border-r-slate-800 p-2 flex-1">
              Entrance:
            </span>
            <span className="w-1/6 text-center p-2">0</span>
          </p>
          <p className="border border-solid border-r-slate-800 border-l-slate-800 w-full flex items-center justify-between flex-1 gap-2 font-md">
            <span className="text-sm md:text-md text-left border border-solid border-r-slate-800 p-2 flex-1">
              Previous Debt:
            </span>
            <span className="w-1/6 text-center p-2">0</span>
          </p>
          <p className="border border-solid border-r-slate-800 border-l-slate-800 w-full flex items-center justify-between flex-1 gap-2 font-md">
            <span className="text-sm md:text-md text-left border border-solid border-r-slate-800 p-2 flex-1">
              Termly Fees:
            </span>
            <span className="w-1/6 text-center p-2">0</span>
          </p>
          <p className="border border-solid border-r-slate-800 border-l-slate-800 w-full flex items-center justify-between flex-1 gap-2 font-md">
            <span className="text-sm md:text-md text-left border border-solid border-r-slate-800 p-2 flex-1">
              PTA/Development Fee:
            </span>
            <span className="w-1/6 text-center p-2">0</span>
          </p>
          <p className="border border-solid border-r-slate-800 border-l-slate-800 w-full flex items-center justify-between flex-1 gap-2 font-md">
            <span className="text-sm md:text-md text-left border border-solid border-r-slate-800 p-2 flex-1">
              Transportation Fee:
            </span>
            <span className="w-1/6 text-center p-2">0</span>
          </p>
          <p className="border border-solid border-r-slate-800 border-l-slate-800 w-full flex items-center justify-between flex-1 gap-2 font-md">
            <span className="text-sm md:text-md text-left border border-solid border-r-slate-800 p-2 flex-1">
              Enrollment Fee:
            </span>
            <span className="w-1/6 text-center p-2">0</span>
          </p>
          <p className="border border-solid border-r-slate-800 border-l-slate-800 w-full flex items-center justify-between flex-1 gap-2 font-md">
            <span className="text-sm md:text-md text-left border border-solid border-r-slate-800 p-2 flex-1">
              Hostel Fee:
            </span>
            <span className="w-1/6 text-center p-2">0</span>
          </p>
          <p className="border border-solid border-r-slate-800 border-l-slate-800 w-full flex items-center justify-between flex-1 gap-2 font-md">
            <span className="text-sm md:text-md text-left border border-solid border-r-slate-800 p-2 flex-1">
              Graduation/Certificate/Miscellaneous:
            </span>
            <span className="w-1/6 text-center p-2">0</span>
          </p>
          <p className="border border-solid border-r-slate-800 border-l-slate-800 w-full flex items-center justify-between flex-1 gap-2 font-md">
            <span className="text-sm md:text-md text-left border border-solid border-r-slate-800 p-2 flex-1">
              Computer Based Test(CBT) Extracurricular Activities:
            </span>
            <span className="w-1/6 text-center p-2">0</span>
          </p>
        </div>

        <div className="flex flex-col items-start w-full md:w-6/12">
          <p className="border border-solid border-r-slate-800 border-l-slate-800 w-full flex items-center justify-between flex-1 gap-0 font-md">
            <span className="text-sm md:text-md text-left border border-solid border-r-slate-800 p-2 flex-1 uppercase bg-slate-900 text-slate-50">
              total school fees:
            </span>
            <span className="text-sm md:text-md w-1/5 text-center p-2 bg-red-800 text-white min-w-fit">
              0
            </span>
          </p>
          <p className="border border-solid border-r-slate-800 border-l-slate-800 w-full flex items-center justify-between flex-1 gap-0 font-md">
            <span className="text-sm md:text-md text-left border border-solid border-r-slate-800 p-2 flex-1 capitalize">
              scholarship fees:
            </span>
            <span className="ext-sm md:text-md w-1/5 text-center p-2 min-w-fit">
              0
            </span>
          </p>
          <p className="border border-solid border-r-slate-800 border-l-slate-800 w-full flex items-center justify-between flex-1 gap-0 font-md">
            <span className="text-sm md:text-md text-left border border-solid border-r-slate-800 p-2 flex-1 capitalize">
              General Discount:
            </span>
            <span className="ext-sm md:text-md w-1/5 text-center p-2 min-w-fit">
              0
            </span>
          </p>
          <p className="border border-solid border-r-slate-800 border-l-slate-800 w-full flex items-center justify-between flex-1 gap-0 font-md">
            <span className="text-sm md:text-md text-left border border-solid border-r-slate-800 p-2 flex-1 uppercase bg-slate-900 text-slate-50">
              amount payable:
            </span>
            <span className="text-sm md:text-md w-1/5 text-center p-2 bg-red-800 text-white min-w-fit">
              0
            </span>
          </p>
          <p className="border border-solid border-r-slate-800 border-l-slate-800 w-full flex items-center justify-between flex-1 gap-0 font-md">
            <span className="text-sm md:text-md text-left border border-solid border-r-slate-800 p-2 flex-1 capitalize">
              amount paid:
            </span>
            <span className="ext-sm md:text-md w-1/5 text-center p-2 min-w-fit">
              0
            </span>
          </p>
          <p className="border border-solid border-r-slate-800 border-l-slate-800 w-full flex items-center justify-between flex-1 gap-0 font-md">
            <span className="text-sm md:text-md text-left border border-solid border-r-slate-800 p-2 flex-1 uppercase bg-slate-900 text-slate-50">
              total balance:
            </span>
            <span className="text-sm md:text-md w-1/5 text-center p-2 bg-red-800 text-white min-w-fit">
              0
            </span>
          </p>
        </div>
      </section>

      <div className="px-8 flex items-center justify-center gap-4">
        <Link
          to="account/result"
          type="button"
          className="focus:bg-teal-900 bg-slate-400 text-slate-50 font-bold p-2 rounded shadow-xl text-xs md:text-sm"
        >
          Check Result
        </Link>
        <button
          type="button"
          className="focus:bg-teal-900 bg-slate-400 text-slate-50 font-bold p-2 rounded shadow-xl text-xs md:text-sm"
        >
          Print Receipt
        </button>
        <button
          type="button"
          className="focus:bg-teal-900 bg-slate-400 text-slate-50 font-bold p-2 rounded shadow-xl text-xs md:text-sm"
        >
          Send SMS
        </button>
        <button
          type="button"
          className="focus:bg-teal-900 bg-slate-400 text-slate-50 font-bold p-2 rounded shadow-xl text-xs md:text-sm"
        >
          Send WhatsApp
        </button>
      </div>
      <hr />

      <h4 className="px-8 py-8 md:p-5 font-bold text-xl text-center font-mono bg-slate-200 rounded my-8">
        2nd term resumption/clearance will -Inshalla- be on sunday 8th January,
        2023
      </h4>

      <hr />

      <p className='text-justify px-8 py-4'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint repudiandae cupiditate a, dolores quisquam veniam quo laborum doloribus ab numquam quibusdam reprehenderit enim voluptates facilis, laboriosam est. Ipsam, nesciunt at. Neque doloremque iusto sapiente sunt cupiditate dolore sint nihil quam accusamus, cumque maxime soluta ullam minus dolorem molestias rerum quas.
      </p>
    </div>
  )
}

export default SchoolFees
