var request = require('request');

function getAll(req, res) {
  request(function(error) {
    if (error) {
      console.warn('getAll: could not get all:', error);
      return;
    }
    res.status(200);
  });
}

module.exports = {
  getAll: getAll
};
