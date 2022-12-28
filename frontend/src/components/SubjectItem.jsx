import React from 'react'

const SubjectItem = ({section}) => {
  return (
    <>
      <hr />
      <h4 className="text-center font-bold text-md my-b">{section}</h4>
      <table class="w-full border text-center mb-10">
        <thead class="bg-white border-b">
          <tr>
            <th
              scope="col"
              class="text-sm font-bold px-6 py-4 text-left border-r bg-teal-700 text-white"
            >
              Courses
            </th>

            <th
              scope="col"
              class="text-sm font-bold px-6 py-4 text-left border-r bg-teal-700 text-white"
            >
              Courses
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-gray-100 border-b">
            <td class="px-6 py-4 whitespace-nowrap text-md font-bold text-gray-900 text-left">
              Al-Quran/Modulation
            </td>
            <td class="text-md text-gray-900 font-bold px-6 py-4 whitespace-nowrap text-right">
              القرآن الكريم وتجويده
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default SubjectItem
