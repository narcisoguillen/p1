P1.Views.Type2View = Backbone.View.extend({

  initialize: function(){
    this.collection.on('add', this.add, this);
  },

  add: function(item){
    console.log(item.toJSON());
  }
});
