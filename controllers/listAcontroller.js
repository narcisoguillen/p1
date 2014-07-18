var ListAController = new require('./controller')();

// GET
ListAController.prototype.index = function(req, res){
  res.send(require('../list1'));
};

module.exports = function(route){
  return new ListAController(route);
};

