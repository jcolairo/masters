var express = require('express');
var router = express.Router();

var lunchMenuController = require('../controllers/lunchMenu.controller');
var breakfastMenuController = require('../controllers/breakfastMenu.controller');

//breakfastMenu
router.get('/api/croissantMenu', breakfastMenuController.criossantMenus);

router.get('/api/muffinsMenu', breakfastMenuController.muffinMenus);

router.get('/api/danishesMenu', breakfastMenuController.danishMenus);

router.get('/api/donutsMenu', breakfastMenuController.donutMenus);

router.get('/api/breakfastBagelsMenu', breakfastMenuController.bagelMenus);

router.get('/api/breakfastRollsMenu', breakfastMenuController.breakfastRollsMenus);

router.get('/api/breakfastSandwichesMenu', breakfastMenuController.breakfastSandwichesMenus);

router.get('/api/breakfastBaguettesMenu', breakfastMenuController.breakfastBaguettesMenus);

router.get('/api/fruitYoghurtMenu', breakfastMenuController.fruitYoghurtMenus);

router.get('/api/breakfastDrinksMenu', breakfastMenuController.breakfastDrinksMenus);

// lunchMenu
router.get('/api/setLunchMenu', lunchMenuController.setLunchMenus);

router.get('/api/fingerMenu', lunchMenuController.fingerMenus);

router.get('/api/coldForkMenu', lunchMenuController.coldForkMenus);

router.get('/api/hotForkMenu', lunchMenuController.hotForkMenus);

router.get('/api/platterMenu', lunchMenuController.platterMenus);

router.get('/api/drinksMenu', lunchMenuController.drinksMenus);

module.exports = router;
