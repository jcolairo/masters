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
var hotForkMenuSchema = new Schema(validationRules);
var hotForkMenu = mongoose.model('hotForkMenu', hotForkMenuSchema);

// var x = new Menu({title: "Niall's Menu", price: "1.99"})
// x.save();

module.exports = hotForkMenu;
