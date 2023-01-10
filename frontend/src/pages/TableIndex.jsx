import React, { useEffect, useMemo, useState } from 'react'
import { useTable } from 'react-table'
import axios from 'axios'

const TableIndex = () => {
  const [products, setProducts] = useState([])

  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get('https://fakestoreapi.com/products')
  //     .catch((err) => console.log(err))

  //   if (response) {
  //     const products = response.data
  //     console.log('products: ', products)
  //     setProducts(products)
  //   }
  // }

  const data = useMemo(() => {
    [
      {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: {
          rate: 3.9,
          count: 120,
        },
      },
      {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: {
          rate: 3.9,
          count: 120,
        },
      },
      {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: {
          rate: 3.9,
          count: 120,
        },
      },
    ]
  }, [])

  const columns = useMemo(() => {
    [
      {
        Header: 'Id',
        accessor: 'id',
      },
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Category',
        accessor: 'category',
      },
    ]
  }, [])

  const tableInstance = useTable({ columns, data })
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance

  // useEffect(() => {
  //   fetchProducts()
  // }, [])

  console.log(columns)

  return (
    
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups?.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers?.map((column) => (
                <TableHeader {...column.getHeaderProps()}>
                  {column.render('Header')}
                </TableHeader>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows?.map((row) => {
            prepareRow(row)

            return (
              row.cells.map((cell, idx) => (
                 <TableData {...cell.getCellProps()}>{cell.render('Cell')}</TableData>
              ))
              // <TableRow {...row.getRowProps()}>
              //   {row.cells?.map((cell) => {
              //     <TableData {...cell.getCellProps()}>{cell.render('Cell')}</TableData>
              //   })}
              // </TableRow>

            )
          })}
        </TableBody>
      </Table>
  )
}

export default TableIndex
