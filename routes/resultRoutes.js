const express = require('express')
const router = express.Router()

const {
  getAllResults,
  getStudentResult,
} = require('../controllers/resultController')

router.get('/', getAllResults)
router.get('/:id', getStudentResult)

module.exports = router
