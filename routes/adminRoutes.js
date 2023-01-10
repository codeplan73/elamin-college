const express = require('express')
const router = express.Router()
const { authenticateUser } = require('../middleware/authentication')

const {
  getAllActiveStudent,
  getAllStudentRecords,
  showStudentRecord,
  updateStudentRecord,
  deleteStudentRecord,
} = require('../controllers/adminController')

router.get('/', getAllActiveStudent)
router.get('/records', getAllStudentRecords)
router
  .route('/:id')
  .get(showStudentRecord)
  .patch(updateStudentRecord)
  .delete(deleteStudentRecord)

// router.route('/').get(authenticateUser, getAllActiveStudent)
// router.route('/records').get(authenticateUser, getAllStudentRecords)
// router
//   .route('/:id')
//   .get(authenticateUser, showStudentRecord)
//   .patch(authenticateUser, updateStudentRecord)
//   .delete(authenticateUser, deleteStudentRecord)

module.exports = router
