const express = require('express');
const router = express.Router();

const {getImages,
    createImages,
    deleteImages} = require('../controllers/galleryController')

    router.get('/', getImages);
    router.post('/', createImages)
    router.delete('/:id', deleteImages)

    module.exports = router