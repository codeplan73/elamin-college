import React from 'react'
import letterHead from '../../assets/el-amin-letterhead.png'

const Result = () => {
  return (
    <>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-x-auto">
              <table class="min-w-full">
                <div className="border border-solid border-slate-60 max-w-4xl container mx-auto my-20 verflow-x-auto">
                  <div className="border border-slate-900 flex items-center justify-between p-2">
                    <img src={letterHead} className="w-full h-32" alt="" />
                  </div>

                  <div className="border border-slate-900 flex items-center justify-center">
                    <p className="text-center p-1">
                      Affiliated with the university of madina, saudi arabia
                    </p>
                  </div>

                  <div className="border border-slate-900 flex items-center">
                    <p className="text-center p-1 flex-1 border border-slate-900">
                      Date: 10/20/2022
                    </p>
                    <p className="text-center p-1 flex-1 border border-slate-900 font-bold uppercase">
                      school academic transcript{' '}
                    </p>
                    <p className="text-center p-1 flex-1 border border-slate-900">
                      Term
                    </p>
                  </div>
                  <div className="border border-slate-900 flex items-center">
                    <p className="text-center p-1 flex-1 border h-max border-r-slate-900">
                      ID: 1299
                    </p>
                    <p className="text-center p-1 flex-1 border h-max border-r-slate-900 font-bold uppercase">
                      SECTION: Primary
                    </p>
                    <p className="text-center p-1 flex-1 border h-max border-r-slate-900">
                      CLASS: Pry1
                    </p>
                    <p className="text-center p-1 flex-1 border h-max border-r-slate-900">
                      POSITION: 6th
                    </p>
                    <p className="text-center p-1 flex-1 border h-max border-r-slate-900">
                      OUT OF: 38
                    </p>
                    {/* <p className='text-center p-1 flex-1 border h-max border-r-slate-900'>
                <img src={logo} className="h-12 mx-auto" alt="" />
            </p> */}
                  </div>
                  <div className="border border-slate-900 flex items-center">
                    <p className="text-center p-1 flex-1 border h-max border-r-slate-900">
                      Fullname: Emmanuel Omonzebaguan
                    </p>
                    <p className="text-center p-1 flex-1 border h-max border-r-slate-900 font-bold uppercase">
                      ??????
                    </p>
                    <p className="text-center p-1 flex-1 border h-max border-r-slate-900">
                      ?????
                    </p>
                  </div>

                  {/* result break down */}
                  <div className="border border-slate-900 flex items-center">
                    <p className="text-center p-1 flex-1 border h-max border-r-slate-900 font-bold bg-slate-900 text-slate-50">
                      RESULT BREAKDOWN
                    </p>
                  </div>

                  <div className="border border-slate-900 flex items-center">
                    <p className="text-center p-1 w-3/12 border h-max border-r-slate-900 font-bold">
                      SUBJECTS
                    </p>
                    <p className="text-center p-1 w-1/12 border h-max border-r-slate-900">
                      Test1
                    </p>
                    <p className="text-center p-1 w-1/12 border h-max border-r-slate-900">
                      Test2
                    </p>
                    <p className="text-center p-1 w-1/12 border h-max border-r-slate-900">
                      Exam
                    </p>
                    <p className="text-center p-1 w-1/12 border h-max border-r-slate-900">
                      Exam
                    </p>
                    <p className="text-center p-1 w-1/12 border h-max border-r-slate-900">
                      Total
                    </p>
                    <p className="text-center p-1 w-1/12 border h-max border-r-slate-900">
                      Grade
                    </p>
                    <p className="text-center p-1 w-1/12 border h-max border-r-slate-900">
                      A.Total
                    </p>
                    <p className="text-center p-1 w-1/12 border h-max border-r-slate-900">
                      G.Grade
                    </p>
                    <p className="text-center p-1 w-2/12 border h-max border-r-slate-900">
                      Remark
                    </p>
                    <p className="text-center p-1 w-3/12 border h-max border-r-slate-900">
                      ????
                    </p>
                  </div>
                  <div className="border border-slate-900 flex items-center">
                    <p className="text-center p-1 w-3/12 border h-max border-r-slate-900 font-bold">
                      SUBJECTS
                    </p>
                    <p className="text-center p-1 w-1/12 border h-max border-r-slate-900">
                      Test1
                    </p>
                    <p className="text-center p-1 w-1/12 border h-max border-r-slate-900">
                      Test2
                    </p>
                    <p className="text-center p-1 w-1/12 border h-max border-r-slate-900">
                      Exam
                    </p>
                    <p className="text-center p-1 w-1/12 border h-max border-r-slate-900">
                      Exam
                    </p>
                    <p className="text-center p-1 w-1/12 border h-max border-r-slate-900 bg-red-100">
                      Total
                    </p>
                    <p className="text-center p-1 w-1/12 border h-max border-r-slate-900 bg-yellow-100">
                      Grade
                    </p>
                    <p className="text-center p-1 w-1/12 border h-max border-r-slate-900">
                      A.Total
                    </p>
                    <p className="text-center p-1 w-1/12 border h-max border-r-slate-900 bg-yellow-200">
                      G.Grade
                    </p>
                    <p className="text-center p-1 w-2/12 border h-max border-r-slate-900">
                      Remark
                    </p>
                    <p className="text-center p-1 w-3/12 border h-max border-r-slate-900">
                      ????
                    </p>
                  </div>

                  <div className="border border-slate-900 flex items-center">
                    <p className="text-center p-1 flex-1 border h-max border-r-slate-900 font-bold bg-slate-900 text-slate-50">
                      RESULT SUMMARY
                    </p>
                  </div>
                  <div className="border border-slate-900 flex items-center uppercase">
                    <p className="text-center p-1 flex-1 border-r-2 h-max text-xs">
                      total score:
                    </p>
                    <p className="text-center p-1 w-1/12 border-r-2 h-max text-xs font-bold">
                      1071
                    </p>
                    <p className="text-center p-1 flex-1 border-r-2 h-max text-xs">
                      percentage score:
                    </p>
                    <p className="text-center p-1 w-1/12 border-r-2 h-max text-xs font-bold">
                      1071
                    </p>
                    <p className="text-center p-1 flex-1 border-r-2 h-max text-xs">
                      subject failed:
                    </p>
                    <p className="text-center p-1 w-1/12 border-r-2 h-max text-xs font-bold">
                      1071
                    </p>
                    <p className="text-center p-1 flex-1 border-r-2 h-max text-xs">
                      core ubject failed:
                    </p>
                    <p className="text-center p-1 w-1/12 border-r-2 h-max text-xs font-bold">
                      1071
                    </p>
                  </div>
                  <div className="border border-slate-900 flex items-center uppercase">
                    <p className="text-center p-1 flex-1 border-r-2 h-max text-xs">
                      termly grade:
                    </p>
                    <p className="text-center p-1 flex-1 border-r-2 h-max text-xs font-bold">
                      pass
                    </p>
                    <p className="text-center p-1 flex-1 border-r-2 h-max text-xs">
                      termly remarks:
                    </p>
                    <p className="text-center p-1 flex-1 border-r-2 h-max text-xs font-bold">
                      v.good result
                    </p>
                  </div>
                  <div className="border border-slate-900 flex items-center">
                    <p className="text-justify p-2 pl-4 w-4/12 border-r-2 h-max text-xs">
                      TEACHER'S COMMENT:
                    </p>
                    <p className="text-justify p-2 pl-4 w-8/12 border-r-2 h-max text-xs font-bold">
                      teachers comment comes here
                    </p>
                  </div>
                  <div className="border border-slate-900 flex items-center">
                    <p className="text-justify p-2 pl-4 w-4/12 border-r-2 h-max text-xs">
                      TEACHER'S COMMENT:
                    </p>
                    <p className="text-justify p-2 pl-4 w-8/12 border-r-2 h-max text-xs font-bold">
                      {' '}
                    </p>
                  </div>
                  <div className="border border-slate-900 flex items-center">
                    <p className="p-2 pl-4 w-full border-r-2 h-max text-md text-justify">
                      mamagement comment comes here
                    </p>
                  </div>
                  <div className="border border-slate-900 flex items-center">
                    <p className="p-2 pl-4 w-full border-r-2 h-max text-md text-justify">
                      second term resumption stuff
                    </p>
                  </div>
                  <div className="border border-slate-900 flex items-center">
                    <p className="p-2 pl-4 flex-1 border-r-2 h-max text-md text-center">
                      Phone: +2349065969235
                    </p>
                    <p className="p-2 pl-4 flex-1 border-r-2 h-max text-md text-center">
                      Email: al-amin2022@gmail.com
                    </p>
                    <p className="p-2 pl-4 flex-1 border-r-2 h-max text-md text-center">
                      Signed Management
                    </p>
                  </div>
                </div>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Result
