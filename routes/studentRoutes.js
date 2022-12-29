const express = require('express');
const router = express.Router();

const {  getStudentDetails,
  getBulletin,
  getAnnouncement
 } = require('../controllers/studentController');
 
router.get('/', getBulletin)
router.get('/:id', getStudentDetails)
router.get('/annas/anas', getAnnouncement)


module.exports = router; 