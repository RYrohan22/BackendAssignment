const express = require('express');
const router = express.Router();
const pairController = require('../controllers/pairController');


router.get('/price', pairController.getPriceData);
router.get('/volume', pairController.getVolumeData);

module.exports = router;
