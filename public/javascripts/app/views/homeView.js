P1.Views.HomeView = Backbone.View.extend({

  initialize: function(){

    var list1 = new P1.Collections.list1();
    var list2 = new P1.Collections.list2();

    this.addItem = new P1.Views.addItemView({
      el: '.add-item',
      list1: list1,
      list2: list2
    });

    this.lists = new P1.Views.listsView({
      el: '.lists',
      list1: list1,
      list2: list2
    });

  }

});
