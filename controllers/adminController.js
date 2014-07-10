var AdminController = new require('./controller')();

// GET /admin
AdminController.prototype.index = function(req, res){
  res.render('index');
};

module.exports = function(route){
  return new AdminController(route);
};
