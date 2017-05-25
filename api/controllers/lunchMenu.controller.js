var Name = require('../models/name-model');
var setLunchMenu = require('../models/setLunchMenu-model');
var fingerMenu = require('../models/fingerMenu-model');
var coldForkMenu = require('../models/coldForkMenu-model');
var hotForkMenu = require('../models/hotForkMenu-model');
var platterMenu = require('../models/platterMenu-model');
var drinksMenu = require('../models/drinksMenu-model');

// Action: index
function indexName(req, res) {
  Name.find({}, function (err, names) {
    if (err) {
      console.log('Could not get list of users:', err);
      // A little bit lazy, but not going to implement
      // anything more complex at this point in time:
      res.status(500).send('Could not get list of users');
      return;
    }
    res.json(names);
  });
}
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
  index: indexName,
  setLunchMenus: indexSetLunchMenus,
  fingerMenus: indexFingerMenus,
  coldForkMenus: indexcoldForkMenus,
  hotForkMenus: indexhotForkMenus,
  platterMenus: indexplatterMenus,
  drinksMenus: indexdrinksMenus
};
