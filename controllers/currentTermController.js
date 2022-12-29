const asyncHandler = require('express-async-handler')
const mysql2 = require('mysql2')

const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})

const getCurrentTerm = asyncHandler(async (req, res) => {
    const q = 'SELECT * FROM current_term'

    db.query(q, (err, data) => {
        if (err) return res.json(err)

        res.status(200).json(data)
    })
})

const showCurrentTerm = asyncHandler(async (req, res) => {
    const id = req.params.id

    const q = 'SELECT * FROM current_term WHERE ID = ?'
    db.query(q, [id], (err, data) => {
        if (err) return res.json(err)

        res.status(200).json(data)
    })
})

const updateCurrentTerm = asyncHandler(async (req, res) => {
    const id = req.params.id
    const { current_term, current_session, branch } = req.body

    const q =
        'UPDATE current_term SET `Current_Term`=?, `Current_Session`=?, `Branch`=? WHERE ID =?'
    const values = [current_term, current_session, branch]

    db.query(q, [...values, id], (err, data) => {
        if (err) return res.json(err)

        res.status(200).json(data)
    })
})

module.exports = {
    getCurrentTerm,
    showCurrentTerm,
    updateCurrentTerm,
}
