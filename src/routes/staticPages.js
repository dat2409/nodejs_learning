const express = require('express');
const staticPagesController = require('../app/controllers/StaticPagesController');

const router = express.Router();

router.use('/search', staticPagesController.search);
router.use('/', staticPagesController.home);

module.exports = router;