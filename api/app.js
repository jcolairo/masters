var express = require('express');
var cors = require('cors');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();

var mongoose = require('mongoose');

mongoose.connect('mongodb://heroku_0ddgp5fl:60n3aes6tac59i2ijp4l4tnv90@ds149711.mlab.com:49711/heroku_0ddgp5fl');

var routes = require('./config/router');

app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(3000, function () {
  console.log('listening on port 3000...');
});
