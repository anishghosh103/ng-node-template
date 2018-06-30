const response = require('./../libs/response');

module.exports = (req, res, next) => {
  response.error(res, { pageNotFound: 'Route not found.' }, 404);
};