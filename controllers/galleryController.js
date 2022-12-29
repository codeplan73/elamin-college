const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const mysql2 = require('mysql2') 

const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})

// get all gallery
const getImages = asyncHandler(async(req, res) => {
    res.send('get all images')
})

// get all gallery
const createImages = asyncHandler(async(req, res) => {
    res.send('create images')
})

// get all gallery
const deleteImages = asyncHandler(async(req, res) => {
    res.send('delete image')
})

module.exports = {
    getImages,
    createImages,
    deleteImages
}
