var croissantMenu = require('../models/breakfastMenu-model/croissant-model');
var muffinMenu = require('../models/breakfastMenu-model/muffin-model');
var danishMenu = require('../models/breakfastMenu-model/danish-model');
var donutMenu = require('../models/breakfastMenu-model/donut-model');
var bagelMenu = require('../models/breakfastMenu-model/bagel-model');
var breakfastRollsMenu = require('../models/breakfastMenu-model/breakfastRolls-model');

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

module.exports = {
  criossantMenus: indexCroissantMenus,
  muffinMenus: indexMuffinMenus,
  danishMenus: indexDanishMenus,
  donutMenus: indexDonutMenus,
  bagelMenus: indexBagelMenus,
  breakfastRollsMenus: indexBreakfastRollsMenus
};
