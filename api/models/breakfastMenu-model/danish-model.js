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
var danishMenuSchema = new Schema(validationRules);
var danishMenu = mongoose.model('danishMenu', danishMenuSchema);

// var x = new Menu({title: "Niall's Menu", price: "1.99"})
// x.save();

module.exports = danishMenu;
