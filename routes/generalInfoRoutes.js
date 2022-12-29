const express = require('express')
const router = express.Router()

const {
  getGeneralInfo,
  showGeneralInfo,
  updateGeneralInfo,
} = require('../controllers/generalInfoController')

router.get('/', getGeneralInfo)
router.route('/:id').get(showGeneralInfo).patch(updateGeneralInfo)

module.exports = router