const { StatusCodes } = require('http-status-codes')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const mysql2 = require('mysql2') 

const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})

const login = asyncHandler(async (req, res) => {
  const {stud_id, stud_class, stud_pin} = req.body;

  const q = "SELECT * FROM student_records WHERE Student_ID = ? AND Student_Class = ?";

  db.query(q, [stud_id, stud_class], (err, data) => {
    if(err) return res.json(err);

    if(!data) return res.json({msg: 'Invalid Credentials'})

    return res.json(data);
  })
})

const logout = async (req, res) => {
  res.send('loggout user')
}

module.exports = {
  login,
  logout,
}
