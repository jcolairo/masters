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
var breakfastBaguettesMenuSchema = new Schema(validationRules);
var breakfastBaguettesMenu = mongoose.model('breakfastBaguettesMenu', breakfastBaguettesMenuSchema);

// var x = new Menu({title: "Niall's Menu", price: "1.99"})
// x.save();

module.exports = breakfastBaguettesMenu;
