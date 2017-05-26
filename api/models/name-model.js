var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validationRules = {
  first_name: {
    type: String
  },
  last_name: {
    type: String
  }
};
var NameSchema = new Schema(validationRules);
var Name = mongoose.model('Name', NameSchema);

module.exports = Name;
