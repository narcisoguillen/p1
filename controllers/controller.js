// Controller definition
function Controller(){ }

// Build routes
Controller.prototype.initialize = function(route){
  if(this.index) { route.get(this.index);     }
  if(this.create){ route.post(this.create);   }
  if(this.update){ route.put(this.update);    }
  if(this.delete){ route.delete(this.delete); }
};

module.exports = function(){

  var controller = function(route){ this.initialize(route); };

  controller.prototype = Object.create(Controller.prototype)
  controller.prototype.constructor = Controller;

  return controller;

};
