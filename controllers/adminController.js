const asyncHandler = require('express-async-handler')
const mysql2 = require('mysql2')

const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})

const getAllActiveStudent = asyncHandler(async (req, res) => {
    const q = "SELECT * FROM student_records WHERE Current_Status ='active'"

    db.query(q, (err, data) => {
        if (err) return res.json(err)

        const count = data.length
        res.status(200).json({ results: data, count })
    })
})

const getAllStudentRecords = asyncHandler(async (req, res) => {
    const q = 'SELECT * FROM student_records'

    db.query(q, (err, data) => {
        if (err) return res.json(err)
        res.status(200).json({ data })
    })
})

const showStudentRecord = asyncHandler(async (req, res) => {
    const studentId = req.params.id

    console.log(req.params.id)
    const q = 'SELECT * FROM student_records WHERE Student_ID =?'

    db.query(q, [studentId], (err, data) => {
        if (err) return res.json(err)

        res.status(200).json(data)
    })
})

const updateStudentRecord = asyncHandler(async (req, res) => {
    const studentId = req.params.id
    const { fullname, section, studclass, branch, pin } = req.body

    const q =
        'UPDATE student_records SET `Fullnames`=?, `Section_Adm`=?, `Class_Adm`=?, `Branch`=?, `Student_Pin`=? WHERE Student_ID =?'
    const values = [fullname, section, studclass, branch, pin]

    db.query(q, [...values, studentId], (err, data) => {
        if (err) return res.json(err)

        res.status(200).json(data)
    })
})

const deleteStudentRecord = asyncHandler(async (req, res) => {
    res.send('delete student record')
})

module.exports = {
    getAllActiveStudent,
    getAllStudentRecords,
    showStudentRecord,
    updateStudentRecord,
    deleteStudentRecord,
}
