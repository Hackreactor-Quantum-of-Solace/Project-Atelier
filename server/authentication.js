const authentication = function (req, res, next) {
  console.log('authenticated');
  next();
};

module.exports = { authentication };