const response = require('./../libs/response');

module.exports = (err, req, res, next) => {
  response.error(res, err);
};