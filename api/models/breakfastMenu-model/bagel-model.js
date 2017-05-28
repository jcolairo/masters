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
var bagelMenuSchema = new Schema(validationRules);
var bagelMenu = mongoose.model('bagelMenu', bagelMenuSchema);

// var x = new Menu({title: "Niall's Menu", price: "1.99"})
// x.save();

module.exports = bagelMenu;
