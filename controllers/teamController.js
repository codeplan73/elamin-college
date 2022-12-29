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

// get all teams
const getTeams = asyncHandler(async (req, res) => {
  res.send('get all teams')
})

// update team
const createTeam = asyncHandler(async (req, res) => {
  res.send('create team')
})

// update team
const updateTeam = asyncHandler(async (req, res) => {
  res.send('update team')
})

// delete team
const deleteTeam = asyncHandler(async (req, res) => {
  res.send('delete team')
})

module.exports = {
  getTeams,
  createTeam,
  updateTeam,
  deleteTeam
}
