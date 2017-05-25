var Name = require('../models/name-model');
var Menu = require('../models/menu-model');

// Action: index
function indexName(req, res) {
  // var x = new Name({first_name: "Niall", last_name: "Wallace"})
  // x.save();
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
function indexMenu(req, res) {
  Menu.find({}, function (err, menus) {
    if (err) {
      console.log('Could not get list of users:', err);
      // A little bit lazy, but not going to implement
      // anything more complex at this point in time:
      res.status(500).send('Could not get list of users');
      return;
    }
    res.json(menus);
  });
}

module.exports = {
  index: indexName,
  menu: indexMenu
};
