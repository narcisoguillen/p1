var P1 = {
  Models:      {},
  Collections: {},
  Views:       {},

  initialize: function(){
    var rotes = new P1.Router();
    Backbone.history.start({pushState: true});
  }

};

$(function(){
  P1.initialize();
});
