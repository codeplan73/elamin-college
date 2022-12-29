const asyncHandler = require('express-async-handler')
const mysql2 = require('mysql2')
const cloudinary = require('cloudinary').v2
const fs = require('fs')

const db = mysql2.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})

const getTeams = asyncHandler(async (req, res) => {
  const q = 'SELECT * FROM tblfeatured'

  db.query(q, (err, data) => {
    if (err) return res.json(err)
    res.status(200).json(data)
  })
})

const createTeam = asyncHandler(async (req, res) => {
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: 'hira-featured',
    }
  )
  fs.unlinkSync(req.files.image.tempFilePath)
  req.body.visualProof = result.secure_url

  const imageLink = req.body.visualProof

  const { name, comment } = req.body

  const q =
    'INSERT INTO tblfeatured (`Fullnames`, `Image`, `Comments`) VALUES (?)'
  const values = [name, imageLink, comment]

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err)

    res.status(200).json(data)
  })
})

const deleteTeam = asyncHandler(async (req, res) => {
  const teamId = req.params.id
  const q = 'DELETE FROM tblfeatured WHERE id = ?'

  db.query(q, [teamId], (err, data) => {
    if (err) return res.json(err)

    res.status(200).json(data)
  })
})

module.exports = {
  getTeams,
  createTeam,
  deleteTeam,
}
