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
var fruitYoghurtMenuSchema = new Schema(validationRules);
var fruitYoghurtMenu = mongoose.model('fruitYoghurtMenu', fruitYoghurtMenuSchema);

// var x = new Menu({title: "Niall's Menu", price: "1.99"})
// x.save();

module.exports = fruitYoghurtMenu;
