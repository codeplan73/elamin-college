const express = require('express')
const router = express.Router()

const {
  getCurrentTerm,
  showCurrentTerm,
  updateCurrentTerm,
} = require('../controllers/infoController')

router.get('/', getCurrentTerm)
router.get('/:id', showCurrentTerm)
router.patch('/:id', updateCurrentTerm)

module.exports = router