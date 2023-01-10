import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { BsTrash } from 'react-icons/bs'
import { useNavigate, Link } from 'react-router-dom'
// import { useGetAllStudentQuery } from '../../redux/services/elaminCollege'
import { useGetAllStudentQuery } from '../redux/services/elaminCollege'
import { Loading } from './'

const StudentTable = () => {
  const [filteredData, setFilteredData] = useState()

  const handleEdit = (id) => {
    // console.log(id)
    // code to open edit form goes here
  }

  const handleDelete = (id) => {
    // console.log(id)
    // code to delete record goes here
  }

  

  const handleChange = (event) => {
    const value = event.target.value
    const filtered = dataItems.filter((item) => {
      return (
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.age.toString().includes(value) ||
        item.country.toLowerCase().includes(value.toLowerCase())
      )
    })
    setFilteredData(filtered)
  }

  const { data, isFetching, error } = useGetAllStudentQuery()

  if (isFetching) return <Loading />

  if (error) {
    return <h4>Error Loading Data</h4>
  }

  if (data) {
    const { items, total_items, total_pages, current_page, per_page } = data
    // console.log(items, total_items, total_pages, current_page, per_page)

    const handlePrevClick = () => {
    if (current_page > 1) {
      current_page - 1, per_page
    }
  }

  const handleNextClick = () => {
    if (current_page < total_pages) {
      current_page + 1, per_page
    }
  }

    return (
      <div className="p-4 flex flex-col items-start gap-3 shadow-lg m-4">
        <input
          type="text"
          className="w-60 outline:none rounded-xl"
          placeholder="Search Table"
          onChange={handleChange}
        /> 

        <div className="flex flex-col w-full">
          <div className="overflow-x-auto sm:-mx-6">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-white border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Student Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Section
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        class
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Branch
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Pin
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => [
                      <tr className="bg-gray-100 border-b" key={item.ID}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.Student_ID}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.Fullnames}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.Section_Adm}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.Class_Adm}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.Branch}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.Student_Pin}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex items-center justify-between ga-2">
                          <button
                            onClick={handleEdit(item.ID)}
                            className="bg-blue-800 text-white font-bold p-1 rounded text-md"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={handleDelete(item.ID)}
                            className="bg-red-700 text-white font-bold p-1 rounded text-md"
                          >
                            <BsTrash />
                          </button>
                        </td>
                      </tr>,
                    ])}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <nav aria-label="Page navigation example">
            <ul className="flex list-style-none">
              <li className="page-item disabled">
                <a
                  className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-500 pointer-events-none focus:shadow-none"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#"
                >
                  1
                </a>
              </li>
              <li className="page-item active">
                <a
                  className="page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded-full text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
                  href="#"
                >
                  {current_page} <span className="visually-hidden">({current_page})</span>
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#"
                >
                  3
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#"
                >
                  Next
                </a>
              </li>
              <li>{total_items}</li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default StudentTable
