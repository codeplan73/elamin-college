import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { FaBullseye, FaEdit } from 'react-icons/fa'
import { BsTrash } from 'react-icons/bs'
import { getStudents } from '../../redux/feature/student/studentSlice'
import {
  AdminNav,
  AdminTopNav,
  StudentTable,
  Loading,
  FilterComponent,
} from '../../components'
import DataTable from 'react-data-table-component'

const Dashboard = () => {
  // const [data, setData] = useState([])
  // const [loading, setLoading] = useState(false)
  // const [perPage, setPerPage] = useState(10)

  // const [filterText, setFilterText] = useState('')
  // const [resetPaginationToggle, setResetPaginationToggle] = useState(false)

  // const columns = [
  //   {
  //     name: 'ID',
  //     selector: (row) => row.Student_ID,
  //   },
  //   {
  //     name: 'Student Name',
  //     selector: (row) => row.Fullnames,
  //   },
  //   {
  //     name: 'Section',
  //     selector: (row) => row.Section_Adm,
  //   },
  //   {
  //     name: 'Class',
  //     selector: (row) => row.Student_Class,
  //   },
  //   {
  //     name: 'Pin',
  //     selector: (row) => row.Student_Pin,
  //   },
  //   {
  //     name: 'Action',
  //     cell: (row) => (
  //       <div className="flex gap-2 items-center">
  //         <button
  //           className="outline outline-teal-600 rounded p-1 text-slate-900"
  //           onClick={() => handleEdit(row.ID)}
  //         >
  //           Edit
  //         </button>
  //         <button
  //           className="outline outline-red-600 rounded p-1 text-slate-900"
  //           onClick={() => handleDelete(row.ID)}
  //         >
  //           Delete
  //         </button>
  //       </div>
  //     ),
  //   },
  // ]

  // useEffect(() => {
  //   getStudents()
  // }, [])
  
  // async function getStudents() {
  //   setLoading(true)
  //   const response = await axios.get('http://localhost:5000/api/v1/admin/')

  //   const student = response.data.results
  //   setData(student)
  //   console.log(student)
  //   setLoading(false)
  // }

  // const filteredItems = student.filter(
  //   (item) =>
  //     item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  // )

  // const subHeaderComponentMemo = React.useMemo(() => {
  //   const handleClear = () => {
  //     if (filterText) {
  //       setResetPaginationToggle(!resetPaginationToggle)
  //       setFilterText('')
  //     }
  //   }

  //   return (
  //     <FilterComponent
  //       onFilter={(e) => setFilterText(e.target.value)}
  //       onClear={handleClear}
  //       filterText={filterText}
  //     />
  //   )
  // }, [filterText, resetPaginationToggle])

  // function handleEdit(row) {
  //   console.log(row)
  // }

  // function handleDelete(row) {
  //   console.log(row)
  // }

  // if (loading) {
  //   return <Loading />
  // }

  // console.log(filteredItems)

  return (
    <div className="flex max-w-7xl">
      <AdminNav />
      <main className="flex flex-col w-full">
        <AdminTopNav />

        {/* <DataTable
          title="Contact List"
          columns={columns}
          data={filteredItems}
          pagination
          paginationResetDefaultPage={resetPaginationToggle}
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          persistTableHead
        /> */}

        <div></div>
      </main>
    </div>
  )
}

export default Dashboard
