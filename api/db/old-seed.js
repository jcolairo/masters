var mongoose = require('mongoose');

function initDb() {
  mongoose.connect('mongodb://heroku_0ddgp5fl:60n3aes6tac59i2ijp4l4tnv90@ds149711.mlab.com:49711/heroku_0ddgp5fl', {}, function (err) {
    if (err) {
      console.log('could not connect to db: err:', err);
      process.exit(1);
    }
  });
}
initDb();
