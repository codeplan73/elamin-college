import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { FaEdit } from 'react-icons/fa'
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
  const [filterText, setFilterText] = useState('')
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStudents())
  }, [])
  const { students: results, loading } = useSelector((state) => state.students)

  if (loading) {
    return <Loading />
  }

  const handleEdit = (id) => {
    console.log(id)
  }

  const handleDelete = (id) => {
    console.log(id)
  }

  if (results) {
    const data = results.results

    // const filteredItems = data.map(
    //   (item) =>
    //     item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
    // )

    const columns = [
      {
        name: 'ID',
        selector: (row) => row.Student_ID,
      },
      {
        name: 'Student Name',
        selector: (row) => row.Fullnames,
      },
      {
        name: 'Section',
        selector: (row) => row.Section_Adm,
      },
      {
        name: 'Class',
        selector: (row) => row.Student_Class,
      },
      {
        name: 'Pin',
        selector: (row) => row.Student_Pin,
      },
      {
        name: 'Action',
        cell: (row) => (
          <div className="flex gap-2 items-center">
            <button
              className="outline outline-teal-600 rounded p-1 text-slate-900"
              onClick={() => handleEdit(row.ID)}
            >
              Edit
            </button>
            <button
              className="outline outline-red-600 rounded p-1 text-slate-900"
              onClick={() => handleDelete(row.ID)}
            >
              Delete
            </button>
          </div>
        ),
      },
    ]

    

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

    return (
      <div className="flex max-w-7xl">
        <AdminNav />
        <main className="flex flex-col w-full">
          <AdminTopNav />

          <DataTable
        title="Contact List"
        columns={columns}
        data={data}
        pagination
        paginationResetDefaultPage={resetPaginationToggle}
        subHeader
        // subHeaderComponent={subHeaderComponentMemo}
        persistTableHead
      />

          <div></div>
        </main>
      </div>
    )
  }
}

export default Dashboard
