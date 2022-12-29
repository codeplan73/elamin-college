const express = require('express');
const router = express.Router();

const { getStudentDetails
} = require('../controllers/studentController');

router.get('/:id', getStudentDetails)


module.exports = router; 