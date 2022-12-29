const express = require('express');
const router = express.Router();

const {
    getEvents,
    showEvent,
    createEvent,
    deleteEvent
    } = require('../controllers/eventController');
 
    router.get('/', getEvents)
    router.post('/', createEvent)
    router.route('/:id')
        .get(showEvent)
        .delete(deleteEvent);

module.exports = router