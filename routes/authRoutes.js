const express = require('express')
const router = express.Router()

const {
  adminLogin,
  adminLogout,
  login,
  logout,
} = require('../controllers/authController')

// router.post('/login', login)
router.post('/login', adminLogin)
router.get('/logout', logout)
router.get('/adminLogout', adminLogout)

module.exports = router
