var AdminController = new require('./controller')();

// GET /admin
AdminController.prototype.index = function(req, res){
  res.send('Hello Admin');
};

module.exports = function(route){
  return new AdminController(route);
};
