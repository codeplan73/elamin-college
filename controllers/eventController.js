const asyncHandler = require('express-async-handler')
const mysql2 = require('mysql2') 

const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})


const getEvents = asyncHandler(async(req, res) => {
    const q = "SELECT * FROM tblnews";

   db.query(q, (err, data) => {
    if(err) return res.json(err);

    res.status(200).json(data);
   })
})

const showEvent = asyncHandler(async(req, res) => {
    const eventId = req.params.id

    const q = "SELECT * FROM tblnews WHERE ID = ?";
    db.query(q, [eventId], (err, data) => {
        if(err) return res.json(err)

        res.status(200).json(data)
    })
})

const createEvent = asyncHandler(async(req, res) => {
    const {title, body, date, code} = req.body
    const q = "INSERT INTO tblnews (`Title`, `Body`, `DatePosted`, `Code`) VALUES (?)"
    const values = [title, body, date, code]

    db.query(q, [values], (err, data) => {
        if(err) return res.json(err)

        res.status(200).json(data)
    })
})

const deleteEvent = asyncHandler(async(req, res) => {
    const eventId = req.params.id;
    const q = "DELETE FROM tblnews WHERE id = ?";

    db.query(q, [eventId], (err, data) => {
        if(err) return res.json(err);

        res.status(200).json(data)
    })
})

module.exports = {
    getEvents,
    showEvent,
    createEvent,
    deleteEvent
}
