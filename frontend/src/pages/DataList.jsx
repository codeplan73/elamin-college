import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { FilterComponent } from '../components/'

function DataList() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [perPage, setPerPage] = useState(10)

  const [filterText, setFilterText] = useState('')
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false)

  const columns = [
    {
      name: 'id',
      selector: (row) => row.id,
    },
    {
      name: 'Name',
      selector: (row) => row.name,
    },
    {
      name: 'Username',
      selector: (row) => row.username,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
    },
    {
      name: 'Action',
      cell: (row) => (
        <div className='flex gap-2 items-center'>
          <button className='outline outline-teal-600 rounded p-1 text-slate-900' onClick={() => handleEdit(row.id)}>Edit</button>
          <button className='outline outline-red-600 rounded p-1 text-slate-900' onClick={() => handleDelete(row.id)}>Delete</button>
        </div>
      ),
    },
  ]

  useEffect(() => {
    fetchTableData()
  }, [])

  async function fetchTableData() { 
    setLoading(true)
    const URL = 'https://jsonplaceholder.typicode.com/users'
    const response = await fetch(URL)

    const users = await response.json()
    setData(users)
    setLoading(false)
  }

  const filteredItems = data.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  )

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle)
        setFilterText('')
      }
    }

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    )
  }, [filterText, resetPaginationToggle])

  function handleEdit(row) {
    console.log(row)
  }

  function handleDelete(row) {
    console.log(row)
  }

  return (
    <div style={{ margin: '20px' }}>
      <DataTable
        title="Contact List"
        columns={columns}
        data={filteredItems}
        pagination
        paginationResetDefaultPage={resetPaginationToggle}
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        persistTableHead
      />
    </div>
  )
}

export default DataList
