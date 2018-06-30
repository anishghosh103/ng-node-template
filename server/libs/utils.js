const utils = {};

utils.promise = (callback) => {
  return new Promise((resolve, reject) => {
    callback({
      success: data => resolve(data),
      error: errors => reject(errors)
    });
  });
};

module.exports = utils;