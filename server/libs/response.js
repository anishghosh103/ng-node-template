const response = {};

response.success = (res, data, message = 'Successful', status = 200) => {
  res.status(status).json({
    errors: null,
    message, status, data
  });
};

response.error = (res, errors = { unknown: 'Error occurred.' }, status = 500) => {
  res.status(status).json({
    errors,
    message: 'Error occurred.',
    status,
    data: null
  });
};

module.exports = response;