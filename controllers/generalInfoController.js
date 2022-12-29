const asyncHandler = require('express-async-handler')
const mysql2 = require('mysql2')

const db = mysql2.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})

const getGeneralInfo = asyncHandler(async (req, res) => {
  const id = req.params.id
  const q = 'SELECT * FROM tblinfo'

  db.query(q, (err, data) => {
    if (err) return res.json(err)

    res.status(200).json(data)
  })
})

const showGeneralInfo = asyncHandler(async (req, res) => {
  const id = req.params.id
  const q = 'SELECT * FROM tblinfo WHERE ID = ?'

  db.query(q, [id], (err, data) => {
    if (err) return res.json(err)

    res.status(200).json(data)
  })
})

const updateGeneralInfo = asyncHandler(async (req, res) => {
  const id = req.params.id
  const { term, session, mission, about, notification } = req.body

  const q =
    'UPDATE tblinfo SET `Term`=?, `Session`=?, `Mission`=?, `About`=?, `Notification`=? WHERE ID =?'
  const values = [term, session, mission, about, notification]

  db.query(q, [...values, id], (err, data) => {
    if (err) return res.json(err)

    res.status(200).json(data)
  })
})

module.exports = {
  getGeneralInfo,
  showGeneralInfo,
  updateGeneralInfo,
}
