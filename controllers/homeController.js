var HomeController = new require('./controller')();

// GET /
HomeController.prototype.index = function(req, res){
  res.render('index');
};

module.exports = function(route){
  return new HomeController(route);
};
