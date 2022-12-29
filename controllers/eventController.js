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

// get all events
const getEvents = asyncHandler(async(req, res) => {
    res.send('get all events')
})

// get all events
const showEvent = asyncHandler(async(req, res) => {
    res.send('show event')
})

// get all events
const createEvent = asyncHandler(async(req, res) => {
    res.send('create event')
})

// get all events
const deleteEvent = asyncHandler(async(req, res) => {
    res.send('delete event')
})

module.exports = {
    getEvents,
    showEvent,
    createEvent,
    deleteEvent
}
