const asyncHandler = require('express-async-handler')
const mysql2 = require('mysql2') 

const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})

const getAllResults = asyncHandler(async (req, res) => {
  res.send('get all results')
})

const getStudentResult = asyncHandler(async (req, res) => {
  res.send('get student result')
})

module.exports = {
    getAllResults,
    getStudentResult
}