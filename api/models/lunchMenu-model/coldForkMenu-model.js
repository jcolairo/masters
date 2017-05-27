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
var coldForkMenuSchema = new Schema(validationRules);
var coldForkMenu = mongoose.model('coldForkMenu', coldForkMenuSchema);

// var x = new Menu({title: "Niall's Menu", price: "1.99"})
// x.save();

module.exports = coldForkMenu;
