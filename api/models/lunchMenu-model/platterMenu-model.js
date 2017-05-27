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
var platterMenuSchema = new Schema(validationRules);
var platterMenu = mongoose.model('platterMenu', platterMenuSchema);

// var x = new Menu({title: "Niall's Menu", price: "1.99"})
// x.save();

module.exports = platterMenu;
