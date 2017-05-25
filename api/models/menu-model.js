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
var MenuSchema = new Schema(validationRules);
var Menu = mongoose.model('Menu', MenuSchema);

// var x = new Menu({title: "Niall's Menu", price: "1.99"})
// x.save();


module.exports = Menu;
