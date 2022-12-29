const express = require('express')
const router = express.Router()

const {
  getTeams,
  createTeam,
  deleteTeam,
} = require('../controllers/teamController')

router.route('/')
  .get(getTeams)
  .post(createTeam)

router.route('/:id')
  .delete(deleteTeam)

module.exports = router
