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
  const q = 'SELECT * FROM first_term_result'

  db.query(q, (err, data) => {
    if (err) return res.json(err)

    res.status(200).json(data)
  })
})

const getStudentResult = asyncHandler(async (req, res) => {
  const id = req.params.id
  const q = 'SELECT * FROM first_term_result WHERE Student_ID = ?'

  db.query(q, [id], (err, data) => {
    if (err) return res.json(err)

    res.status(200).json(data)
  })
})

module.exports = {
  getAllResults,
  getStudentResult,
}
