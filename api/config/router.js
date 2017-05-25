var express = require('express');
var router = express.Router();

var lunchMenuController = require('../controllers/lunchMenu.controller');

router.get('/api/names', lunchMenuController.index);

router.get('/api/setLunchMenus', lunchMenuController.setLunchMenu);

router.get('api/fingerMenu', lunchMenuController.fingerMenu);

router.get('api/coldForkMenu', lunchMenuController.coldForkMenu);

router.get('api/hotForkMenu', lunchMenuController.hotForkMenu);

router.get('api/platterMenu', lunchMenuController.platterMenu);

router.get('api/drinksMenu', lunchMenuController.drinksMenu);

module.exports = router;
