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
var muffinMenuSchema = new Schema(validationRules);
var muffinMenu = mongoose.model('muffinMenu', muffinMenuSchema);

// var x = new Menu({title: "Niall's Menu", price: "1.99"})
// x.save();

module.exports = muffinMenu;
