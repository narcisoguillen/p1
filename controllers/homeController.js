var HomeController = new require('./controller')();

// GET /
HomeController.prototype.index = function(req, res){
  res.send('Hello World');
};

module.exports = function(route){
  return new HomeController(route);
};
