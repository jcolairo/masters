var setLunchMenu = require('../models/lunchMenu-model/setLunchMenu-model');
var fingerMenu = require('../models/lunchMenu-model/fingerMenu-model');
var coldForkMenu = require('../models/lunchMenu-model/coldForkMenu-model');
var hotForkMenu = require('../models/lunchMenu-model/hotForkMenu-model');
var platterMenu = require('../models/lunchMenu-model/platterMenu-model');
var drinksMenu = require('../models/lunchMenu-model/drinksMenu-model');

// Action: index
function indexSetLunchMenus(req, res) {
  setLunchMenu.find({}, function (err, setLunchMenus) {
    if (err) {
      console.log('Could not get list of users:', err);
      res.status(500).send('Could not get list of users');
      return;
    }
    res.json(setLunchMenus);
  });
}
function indexFingerMenus(req, res) {
  fingerMenu.find({}, function (err, fingerMenu) {
    if (err) {
      console.log('Could not get list of users:', err);
      res.status(500).send('Could not get list of users');
      return;
    }
    res.json(fingerMenu);
  });
}
function indexcoldForkMenus(req, res) {
  coldForkMenu.find({}, function (err, coldForkMenu) {
    if (err) {
      console.log('Could not get list of users:', err);
      res.status(500).send('Could not get list of users');
      return;
    }
    res.json(coldForkMenu);
  });
}
function indexhotForkMenus(req, res) {
  hotForkMenu.find({}, function (err, hotFoodMenu) {
    if (err) {
      console.log('Could not get list of users:', err);
      res.status(500).send('Could not get list of users');
      return;
    }
    res.json(hotFoodMenu);
  });
}
function indexplatterMenus(req, res) {
  platterMenu.find({}, function (err, platterMenu) {
    if (err) {
      console.log('Could not get list of users:', err);
      res.status(500).send('Could not get list of users');
      return;
    }
    res.json(platterMenu);
  });
}
function indexdrinksMenus(req, res) {
  drinksMenu.find({}, function (err, drinksMenu) {
    if (err) {
      console.log('Could not get list of users:', err);
      res.status(500).send('Could not get list of users');
      return;
    }
    res.json(drinksMenu);
  });
}

module.exports = {
  setLunchMenus: indexSetLunchMenus,
  fingerMenus: indexFingerMenus,
  coldForkMenus: indexcoldForkMenus,
  hotForkMenus: indexhotForkMenus,
  platterMenus: indexplatterMenus,
  drinksMenus: indexdrinksMenus
};
