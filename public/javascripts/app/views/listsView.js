P1.Views.listsView = Backbone.View.extend({

  initialize: function(options){

    this.list1 = new P1.Views.ListView({
      el: '#type1',
      collection: options.list1
    });

    this.list2 = new P1.Views.ListView({
      el: '#type2',
      collection: options.list2
    });
  }

});
