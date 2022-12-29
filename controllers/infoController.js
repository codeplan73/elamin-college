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


// get current term
const getCurrentTerm = asyncHandler(async(req, res) => {
    res.send('get current term')
})

// show current term
const showCurrentTerm = asyncHandler(async(req, res) => {
    res.send('show current term')
})
// update current term
const updateCurrentTerm = asyncHandler(async(req, res) => {
    res.send('update current term')
})

module.exports = {
    getCurrentTerm, 
    showCurrentTerm,
    updateCurrentTerm
}