P1.Views.HomeView = Backbone.View.extend({

  initialize: function(){

    this.addItem = new P1.Views.addItemView({
      el: '.add-item'
    });

    this.lists = new P1.Views.listsView({
      el: '.lists'
    });

  }

});
