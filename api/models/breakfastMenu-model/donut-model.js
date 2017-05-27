var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validationRules = {
  title: {
    type: String
  },
  price: {
    type: String
  }
};
var donutMenuSchema = new Schema(validationRules);
var donutMenu = mongoose.model('donutMenu', donutMenuSchema);

// var x = new Menu({title: "Niall's Menu", price: "1.99"})
// x.save();

module.exports = donutMenu;

var x = new donutMenu({
  title: 'Large Donut',
  price: '£2.00'
});
x.save();
