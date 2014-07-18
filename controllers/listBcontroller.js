var ListBController = new require('./controller')();

// GET
ListBController.prototype.index = function(req, res){
  res.send(require('../list2'));
};

module.exports = function(route){
  return new ListBController(route);
};
