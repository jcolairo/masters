var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validationRules = {
  title: {
    type: String
  },
  price: {
    type: String
  },
  description: [
    String
  ]
};
var breakfastDrinksMenuSchema = new Schema(validationRules);
var breakfastDrinksMenu = mongoose.model('breakfastDrinksMenu', breakfastDrinksMenuSchema);

// var x = new Menu({title: "Niall's Menu", price: "1.99"})
// x.save();

module.exports = breakfastDrinksMenu;
