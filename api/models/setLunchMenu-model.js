var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validationRules = {
  title: {
    type: String
  },
  titleName: {
    type: String
  },
  price: {
    type: String
  },
  description: [
    String
  ]
};
var setLunchMenuSchema = new Schema(validationRules);
var setLunchMenu = mongoose.model('setLunchMenu', setLunchMenuSchema);

// var x = new Menu({title: "Niall's Menu", price: "1.99"})
// x.save();

module.exports = setLunchMenu;
