var express = require('express');
var router = express.Router();

var lunchMenuController = require('../controllers/lunchMenu.controller');

router.get('/api/names', lunchMenuController.index);

router.get('/api/menus', lunchMenuController.menu);

module.exports = router;
