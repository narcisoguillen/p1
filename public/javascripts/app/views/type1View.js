P1.Views.Type1View = Backbone.View.extend({

  initialize: function(){
    this.collection.on('add', this.add, this);
  },

  add: function(item){
    console.log(item.toJSON());
  }
});
