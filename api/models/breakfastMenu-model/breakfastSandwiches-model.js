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
var breakfastSandwichesMenuSchema = new Schema(validationRules);
var breakfastSandwichesMenu = mongoose.model('breakfastSandwichesMenu', breakfastSandwichesMenuSchema);

// var x = new Menu({title: "Niall's Menu", price: "1.99"})
// x.save();

module.exports = breakfastSandwichesMenu;

{
  title: 'Fried Egg Sandwich',
  price: '£3.20',
  description: [
    '(2 free-range eggs)'
  ]
}
