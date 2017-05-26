var express = require('express');
var router = express.Router();

var lunchMenuController = require('../controllers/lunchMenu.controller');

router.get('/api/names', lunchMenuController.index);

router.get('/api/setLunchMenus', lunchMenuController.setLunchMenus);

router.get('/api/fingerMenu', lunchMenuController.fingerMenus);

router.get('/api/coldForkMenu', lunchMenuController.coldForkMenus);

router.get('/api/hotForkMenu', lunchMenuController.hotForkMenus);

router.get('/api/platterMenu', lunchMenuController.platterMenus);

router.get('/api/drinksMenu', lunchMenuController.drinksMenus);

module.exports = router;
