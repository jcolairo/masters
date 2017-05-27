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
var breakfastRollsMenuSchema = new Schema(validationRules);
var breakfastRollsMenu = mongoose.model('breakfastRollsMenu', breakfastRollsMenuSchema);

// var x = new Menu({title: "Niall's Menu", price: "1.99"})
// x.save();

module.exports = breakfastRollsMenu;
