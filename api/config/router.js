var express = require('express');
var router = express.Router();

var lunchMenuController = require('../controllers/lunchMenu.controller');

router.get('/api/menu', lunchMenuController.getAll);

module.exports = router;
