var croissantMenu = require('../models/breakfastMenu-model/croissant-model');
var muffinMenu = require('../models/breakfastMenu-model/muffin-model');
var danishMenu = require('../models/breakfastMenu-model/danish-model');
var donutMenu = require('../models/breakfastMenu-model/donut-model');
var bagelMenu = require('../models/breakfastMenu-model/bagel-model');
var breakfastRollsMenu = require('../models/breakfastMenu-model/breakfastRolls-model');
var breakfastSandwichesMenu = require('../models/breakfastMenu-model/breakfastSandwiches-model');
var breakfastBaguettesMenu = require('../models/breakfastMenu-model/breakfastBaguette-model');
var fruitYoghurtMenu = require('../models/breakfastMenu-model/fruitYoghurt-model');
var breakfastDrinksMenu = require('../models/breakfastMenu-model/breakfastDrinks-model');

function indexCroissantMenus(req, res) {
  croissantMenu.find({}, function (err, criossantMenus) {
    if (err) {
      console.log('Could not get list of users:', err);
      res.status(500).send('Could not get list of users');
      return;
    }
    res.json(criossantMenus);
  });
}
function indexMuffinMenus(req, res) {
  muffinMenu.find({}, function (err, muffinMenus) {
    if (err) {
      console.log('Could not get list of users:', err);
      res.status(500).send('Could not get list of users');
      return;
    }
    res.json(muffinMenus);
  });
}
function indexDanishMenus(req, res) {
  danishMenu.find({}, function (err, danishMenus) {
    if (err) {
      console.log('Could not get list of users:', err);
      res.status(500).send('Could not get list of users');
      return;
    }
    res.json(danishMenus);
  });
}
function indexDonutMenus(req, res) {
  donutMenu.find({}, function (err, danishMenus) {
    if (err) {
      console.log('Could not get list of users:', err);
      res.status(500).send('Could not get list of users');
      return;
    }
    res.json(danishMenus);
  });
}
function indexBagelMenus(req, res) {
  bagelMenu.find({}, function (err, bagelMenus) {
    if (err) {
      console.log('Could not get list of users:', err);
      res.status(500).send('Could not get list of users');
      return;
    }
    res.json(bagelMenus);
  });
}
function indexBreakfastRollsMenus(req, res) {
  breakfastRollsMenu.find({}, function (err, breakfastRollsMenus) {
    if (err) {
      console.log('Could not get list of users:', err);
      res.status(500).send('Could not get list of users');
      return;
    }
    res.json(breakfastRollsMenus);
  });
}
function indexBreakfastSandwichesMenus(req, res) {
  breakfastSandwichesMenu.find({}, function (err, breakfastSandwichesMenus) {
    if (err) {
      console.log('Could not get list of users:', err);
      res.status(500).send('Could not get list of users');
      return;
    }
    res.json(breakfastSandwichesMenus);
  });
}
function indexBreakfastBaguettesMenus(req, res) {
  breakfastBaguettesMenu.find({}, function (err, breakfastBaguettesMenu) {
    if (err) {
      console.log('Could not get list of users:', err);
      res.status(500).send('Could not get list of users');
      return;
    }
    res.json(breakfastBaguettesMenu);
  });
}
function indexFruitYoghurtMenus(req, res) {
  fruitYoghurtMenu.find({}, function (err, fruitYoghurtMenu) {
    if (err) {
      console.log('Could not get list of users:', err);
      res.status(500).send('Could not get list of users');
      return;
    }
    res.json(fruitYoghurtMenu);
  });
}
function indexBreakfastDrinksMenus(req, res) {
  breakfastDrinksMenu.find({}, function (err, breakfastDrinksMenu) {
    if (err) {
      console.log('Could not get list of users:', err);
      res.status(500).send('Could not get list of users');
      return;
    }
    res.json(breakfastDrinksMenu);
  });
}

module.exports = {
  criossantMenus: indexCroissantMenus,
  muffinMenus: indexMuffinMenus,
  danishMenus: indexDanishMenus,
  donutMenus: indexDonutMenus,
  bagelMenus: indexBagelMenus,
  breakfastRollsMenus: indexBreakfastRollsMenus,
  breakfastSandwichesMenus: indexBreakfastSandwichesMenus,
  breakfastBaguettesMenus: indexBreakfastBaguettesMenus,
  fruitYoghurtMenus: indexFruitYoghurtMenus,
  breakfastDrinksMenus: indexBreakfastDrinksMenus
};
