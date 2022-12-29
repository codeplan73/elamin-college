const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const mysql2 = require('mysql2')
const cloudinary = require('cloudinary').v2
const fs = require('fs')
const path = require('path')

const db = mysql2.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})

// get all gallery
const getImages = asyncHandler(async (req, res) => {
  const q = 'SELECT * FROM tblgallery'

  db.query(q, (err, data) => {
    if (err) return res.json(err)

    res.status(200).json(data)
  })
})

// get all gallery
const createImages = asyncHandler(async (req, res) => {
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: 'hira-gallery',
    }
  )
  fs.unlinkSync(req.files.image.tempFilePath)
  req.body.visualProof = result.secure_url

  const imgLink = req.body.visualProof;

  const q =
    'INSERT INTO tblgallery (`image`) VALUES (?)'

  db.query(q, [imgLink], (err, data) => {
    if (err) return res.json(err)

    res.status(200).json(data)
  })
})

// get all gallery
const deleteImages = asyncHandler(async (req, res) => {
  const imageId = req.params.id;
    const q = "DELETE FROM tblgallery WHERE id = ?";

    db.query(q, [imageId], (err, data) => {
        if(err) return res.json(err);

        res.status(200).json(data)
    })
})

module.exports = {
  getImages,
  createImages,
  deleteImages,
}
